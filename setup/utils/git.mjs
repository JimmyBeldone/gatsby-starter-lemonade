/* eslint-disable import/no-extraneous-dependencies */
import rimraf from 'rimraf';
import { exec } from 'child_process';
import prompts from 'prompts';

import { onCancel, writeMessage } from './consoleLog.mjs';
import { gitNoDeleteMessage } from '../messages.mjs';

export const removeGitFolder = async () =>
    rimraf('.git')
        .then(() => {
            console.log('Git folder deleted !');
        })
        .catch((error) => {
            throw new Error(error);
        });

const runGitInit = async () =>
    new Promise((resolve) => {
        exec('git init', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Git initialized !');
            resolve();
        });
    });

const runAddGitRemote = async (remoteUrl) =>
    new Promise((resolve) => {
        exec(`git remote add origin ${remoteUrl}`, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Git remote added !');
            resolve();
        });
    });

const runSetMainBranch = async () =>
    new Promise((resolve) => {
        exec('git branch -M main', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Main branch set !');
            resolve();
        });
    });

const runGitAdd = async () =>
    new Promise((resolve) => {
        exec('git add .', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Git add done !');
            resolve();
        });
    });

const runGitCommit = async () =>
    new Promise((resolve) => {
        exec('git commit -m "Initial commit"', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Git commit done !');
            resolve();
        });
    });

const runGitPush = async () =>
    new Promise((resolve) => {
        exec('git push -u origin main', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Git push done !');
            resolve();
        });
    });

export const promptGitRemote = async () => {
    const promptElement = await prompts(
        {
            initial: '',
            message: 'Add your Git remote URL : ',
            name: 'value',
            type: 'text',
        },
        { onCancel },
    );
    if (promptElement.value !== undefined) {
        await runGitInit();
        await runAddGitRemote(promptElement.value);
        await runSetMainBranch();
        await runGitAdd();
        await runGitCommit();
        await runGitPush();
    } else {
        console.log('Git remote not added !');
    }
};

export const manageGit = async () => {
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
                return true;
            }
            await removeGitFolder();
            await promptGitRemote();
        } else {
            writeMessage(gitNoDeleteMessage);
            return true;
        }
    } else {
        return null;
    }
    return true;
};
