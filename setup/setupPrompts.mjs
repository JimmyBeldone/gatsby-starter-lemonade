/* eslint-disable no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du fichier actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Obtenir le nom du dossier de l'application
const appName = path.basename(path.resolve(__dirname, '..'));

// Define prompts for use with npm 'prompt' module in setup script
export default [
    {
        initial: appName,
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
