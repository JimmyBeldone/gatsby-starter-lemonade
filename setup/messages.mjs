/* eslint-disable import/no-extraneous-dependencies */
import chalk from 'chalk';

import { icons, unicode } from './constants.mjs';

const chalkBg = chalk.bgGreen;

export const cancelMessage = `

Not ready, I get it. Maybe next time !  ${unicode(icons.wink)}

`;

export const intalledMessage = `
${unicode(icons.check)}  Alright ! Dependencies installed !

${chalkBg('                                         ')}


${unicode(icons.trash)}  Preparing to delete local git repository...\n
`;

export const pkgIntroMesage = `
${chalkBg('                                         ')}


${unicode(icons.tree)}  Now let's pimp your package.json file \n
`;

export const pkgAllSetMessage = `\n${unicode(
    icons.check,
)}  Your package.json is set !\n`;

export const cleanUpMessage = `
${chalkBg('                                         ')}


${unicode(icons.broom)}  Cleaning up setup files... \n\n`;

export const finalMessage = `
${chalkBg('                                         ')}


${unicode(icons.check)}  Gatsby Stater Lemonade Initialized ${unicode(
    icons.lemon,
)}

${unicode(icons.biceps)}  Go build something great !


${chalkBg('                                         ')}


${unicode(icons.rocket)}  Starting server ...

`;

export const gitDeleteMessage = `\n${unicode(
    icons.check,
)}  Original Git repository removed ! \n `;

export const gitNoDeleteMessage = `\n${unicode(
    icons.cross,
)}  Git repository won't be removed  \n `;
