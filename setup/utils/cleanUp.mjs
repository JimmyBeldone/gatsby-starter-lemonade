// eslint-disable-next-line import/no-extraneous-dependencies
import { rimraf } from 'rimraf';
import { exec } from 'child_process';

import { writeMessage, writeMessageValid } from './consoleLog.mjs';
import { cleanUpMessage } from '../messages.mjs';
import { setupPath } from '../constants.mjs';

export const startCleanUp = async () =>
    new Promise((resolve) => {
        writeMessage(cleanUpMessage);
        exec('yarn remove chalk prompts replace -D', (err) => {
            if (err) {
                throw new Error(err);
            }

            // remove all setup scripts from the 'setup' folder
            rimraf(setupPath)
                .then(() => {
                    writeMessageValid('Setup folder Deleted');
                    return true;
                })
                .catch((error) => {
                    throw new Error(error);
                });
            resolve();
        });
    });
