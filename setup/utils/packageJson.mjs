/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import replace from 'replace';
import path from 'path';
import prompts from 'prompts';
import { fileURLToPath } from 'url';

import { pkgJsonPathPrefix } from '../constants.mjs';
import { onCancel, writeMessage } from './consoleLog.mjs';
import { pkgAllSetMessage, pkgIntroMesage } from '../messages.mjs';

const replaceBase = {
    paths: [`${pkgJsonPathPrefix}package.json`],
    recursive: false,
    replacement: '',
    silent: true,
};

const getAppName = () => {
    // Obtenir le chemin du fichier actuel
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Obtenir le nom du dossier de l'application
    const appName = path.basename(path.resolve(__dirname, '../..'));
    return appName;
};

const promptList = [
    {
        initial: getAppName(),
        message: 'Project name',
        name: 'name',
        type: 'text',
        validate: (projectName) => {
            const regex = /^[^._][a-z0-9-_~]+$/;
            if (projectName.match(regex)) {
                return true;
            }
            return `Limited to: lowercase letters, numbers, period, hyphen, underscore, and tilde; cannot begin with period or underscore.`;
        },
    },
    {
        initial: '',
        message: 'Project description',
        name: 'description',
        type: 'text',
    },
    {
        initial: '0.1.0',
        message: 'Version',
        name: 'version',
        type: 'text',
    },
    {
        initial: 'Jimmy Beldone <dev.jimmy.beldone@gmail.com>',
        message: 'Author',
        name: 'author',
        type: 'text',
    },
    {
        initial: 'MIT',
        message: 'License',
        name: 'license',
        type: 'text',
    },
];

// remove setup scripts from package.json
export const removeSetupScripts = () => {
    const regexList = [
        /\s*"setup":.*,/,
        /\s*"setup:test":.*,/,
        /\s*"setup:test:init":.*,/,
        /\s*"setup:copy":.*,/,
    ];

    regexList.forEach((regex) => {
        replace({
            ...replaceBase,
            regex,
        });
    });
};

// reset package.json 'keywords' field to empty state
export const replaceKeywords = () => {
    replace({
        ...replaceBase,
        regex: /"keywords": \[[\s\S]+?\]/,
        replacement: `"keywords": []`,
    });
};

export const startPackageJsonPrompts = async () => {
    writeMessage(pkgIntroMesage);

    const answers = await prompts(promptList, { onCancel });

    const values = Object.entries(answers);

    values.forEach((res) => {
        replace({
            paths: [`${pkgJsonPathPrefix}package.json`],
            recursive: false,
            regex: `("${res.key}"): "(.*?)"`,
            replacement: `$1: "${res.value}"`,
            silent: true,
        });
    });

    // remove setup scripts from package.json
    replaceKeywords();

    // reset package.json 'keywords' field to empty state
    removeSetupScripts();

    writeMessage(pkgAllSetMessage);

    return true;
};
