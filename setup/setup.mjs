import { intalledMessage } from './messages.mjs';
import { startPackageJsonPrompts } from './utils/packageJson.mjs';
import { manageGit } from './utils/git.mjs';
import { writeMessage, writeMessageValid } from './utils/consoleLog.mjs';
import { startCleanUp } from './utils/cleanUp.mjs';

const setupStart = async () => {
    writeMessage(intalledMessage);

    await manageGit();

    await startPackageJsonPrompts();

    if (!process.env.MODE === 'test') {
        await startCleanUp();
    }
};

setupStart()
    .then(() => {
        writeMessageValid('Setup finished');
    })
    .catch((error) => {
        throw new Error(error);
    });
