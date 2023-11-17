import { intalledMessage } from './messages.mjs';
import { startPackageJsonPrompts } from './utils/packageJson.mjs';
import { manageGit } from './utils/git.mjs';
import { writeMessage } from './utils/consoleLog.mjs';
import { startCleanUp } from './utils/cleanUp';

const setupStart = async () => {
    writeMessage(intalledMessage);

    await manageGit();

    await startPackageJsonPrompts();

    await startCleanUp();
};

setupStart()
    .then(() => {
        console.log('Setup finished');
    })
    .catch((error) => {
        throw new Error(error);
    });
