// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk';
import { cancelMessage } from '../messages.mjs';
import { icons, unicode } from '../constants.mjs';

const chalkBold = chalk.bold.white;

export const writeMessage = (msg) => console.log(chalkBold(msg));

export const onCancel = () => {
    writeMessage(cancelMessage);
    return false;
};

export const writeMessageValid = (msg) =>
    console.log(chalkBold(`\n${unicode(icons.check)}  ${msg} \n `));
