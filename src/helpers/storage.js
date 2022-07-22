import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => ({
    getItem() {
        return Promise.resolve(null);
    },
    removeItem() {
        return Promise.resolve();
    },
    setItem(value) {
        return Promise.resolve(value);
    },
});

const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage();

export default storage;
