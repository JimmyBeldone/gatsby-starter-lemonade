// eslint-disable-next-line import/no-extraneous-dependencies
import { rimraf } from 'rimraf';
import { exec } from 'child_process';

import { writeMessage } from './consoleLog.mjs';
import { cleanUpMessage, finalMessage } from '../messages.mjs';
import { setupPath } from '../constants.mjs';

export const startCleanUp = async () => {
    writeMessage(cleanUpMessage);

    await exec('yarn remove chalk prompts replace -D').then(() => {
        writeMessage(finalMessage);

        // remove all setup scripts from the 'setup' folder
        rimraf(setupPath)
            .then(() => {
                console.log('Setup folder Deleted');
                return true;
            })
            .catch((error) => {
                throw new Error(error);
            });
    });
};
