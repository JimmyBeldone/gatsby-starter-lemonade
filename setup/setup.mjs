/* eslint-disable import/no-extraneous-dependencies */
import chalk from 'chalk';
import { exec } from 'child_process';

import prompts from 'prompts';
import replace from 'replace';
import { rimraf } from 'rimraf';
// import util from 'util';
// import { exec } from 'child_process';

import { log } from './constants.mjs';
import questions from './setupPrompts.mjs';

// const exec = util.promisify(require('child_process').exec);

import {
    cancelMessage,
    cleanUpMessage,
    finalMessage,
    gitDeleteMessage,
    gitNoDeleteMessage,
    intalledMessage,
    pkgAllSetMessage,
    pkgIntroMesage,
} from './messages.mjs';

const chalkBold = chalk.bold.white;

const writeMessage = (msg) => log(chalkBold(msg));

writeMessage(intalledMessage);

const onCancel = () => {
    writeMessage(cancelMessage);
    return false;
};

const pkgJsonPathPrefix = process.env.MODE === 'test' ? 'setupCopy/' : '';
const setupPath = process.env.MODE === 'test' ? './setupCopy' : './setup';

// lancer la commande 'git init'
const gitInit = async () => {
    const { stderr, stdout } = await exec('git init');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
};

// Update package.json
const updatePackage = async () => {
    writeMessage(pkgIntroMesage);

    const responses = await prompts(questions, { onCancel });

    const values = Object.keys(responses).map((item) => ({
        key: item,
        value: responses[item],
    }));

    // simply use an empty URL here to clear the existing repo URL
    values.push({
        key: 'url',
        value: 'https://github.com/username/repo',
    });

    // update package.json with the user's values
    values.forEach((res) => {
        replace({
            paths: [`${pkgJsonPathPrefix}package.json`],
            recursive: false,
            regex: `("${res.key}"): "(.*?)"`,
            replacement: `$1: "${res.value}"`,
            silent: true,
        });
    });

    // reset package.json 'keywords' field to empty state
    replace({
        paths: [`${pkgJsonPathPrefix}package.json`],
        recursive: false,
        regex: /"keywords": \[[\s\S]+?\]/,
        replacement: `"keywords": []`,
        silent: true,
    });

    // remove setup script from package.json
    replace({
        paths: [`${pkgJsonPathPrefix}package.json`],
        recursive: false,
        regex: /\s*"setup":.*,/,
        replacement: '',
        silent: true,
    });

    replace({
        paths: [`${pkgJsonPathPrefix}package.json`],
        recursive: false,
        regex: /\s*"setup:test":.*,/,
        replacement: '',
        silent: true,
    });

    replace({
        paths: [`${pkgJsonPathPrefix}package.json`],
        recursive: false,
        regex: /\s*"setup:test:init":.*,/,
        replacement: '',
        silent: true,
    });

    replace({
        paths: [`${pkgJsonPathPrefix}package.json`],
        recursive: false,
        regex: /\s*"setup:copy":.*,/,
        replacement: '',
        silent: true,
    });

    writeMessage(pkgAllSetMessage);

    // message cleanup
    writeMessage(cleanUpMessage);

    // Remove setup dependencies
    async function cleanDeps() {
        const { stdout } = await exec('yarn remove chalk prompts replace -D');
        console.log('stdout:', stdout);
    }
    cleanDeps().then(() => {
        writeMessage(finalMessage);

        // remove all setup scripts from the 'setup' folder
        rimraf(setupPath)
            .then((resp) => {
                console.log('Delete setup folder :', resp);
            })
            .catch((error) => {
                throw new Error(error);
            });
    });
};

// Initialize prompt
// eslint-disable-next-line consistent-return
(async () => {
    const deleteGit = await prompts(
        {
            initial: true,
            message: 'Delete the git repository?  [Y/n]',
            name: 'value',
            type: 'confirm',
        },
        { onCancel },
    );

    if (deleteGit.value !== undefined) {
        if (deleteGit.value) {
            if (process.env.MODE === 'test') {
                writeMessage(gitDeleteMessage);
                updatePackage();
            } else {
                rimraf('.git', (error) => {
                    if (error) throw new Error(error);
                    writeMessage(gitDeleteMessage);

                    // lance la commande 'git init'
                    gitInit().then(() => {
                        // ask for git remote url
                        prompts(
                            {
                                initial: '',
                                message:
                                    'Git remote URL (ex: "git@github.com:JimmyBeldone/gatsby-starter-lemonade.git")',
                                name: 'value',
                                type: 'text',
                            },
                            { onCancel },
                        ).then((res) => {
                            // set git remote url
                            exec(
                                `git remote add origin ${res.value}`,
                                (err) => {
                                    if (err) {
                                        console.error(err);
                                        return;
                                    }

                                    exec('git branch -M main', (errBranch) => {
                                        if (errBranch) {
                                            console.error(errBranch);
                                            return;
                                        }
                                        // push to remote
                                        exec(
                                            'git push -u origin master',
                                            (errPush) => {
                                                if (errPush) {
                                                    console.error(errPush);
                                                    return;
                                                }
                                                updatePackage();
                                            },
                                        );
                                    });
                                },
                            );
                        });
                    });
                });
            }
        } else {
            writeMessage(gitNoDeleteMessage);
            updatePackage();
        }
    } else {
        return null;
    }
})();
