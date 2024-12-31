const { readData, writeData, createBackup } = require('./fileOperations');

function addEntry(filePath, path, entry) {
    const data = readData(filePath);
    let target = data;
    const keys = path.split('.');

    keys.forEach((key, index) => {
        if (!target[key]) {
            target[key] = Array.isArray(target) ? [] : {};
        }
        if (index === keys.length - 1) {
            if (Array.isArray(target[key])) {
                target[key].push(entry);
            } else {
                target[key] = [entry];
            }
        } else {
            target = target[key];
        }
    });

    createBackup(filePath);
    writeData(filePath, data);
}

function updateEntry(filePath, searchPath, searchKey, searchValue, updateKey, updateValue) {
    const data = readData(filePath);
    let target = data;
    searchPath.split('.').forEach(key => {
        target = target[key];
    });
    const entry = target.find(item => item[searchKey] === searchValue);
    if (entry) {
        entry[updateKey] = updateValue;
        createBackup(filePath);
        writeData(filePath, data);
    }
}

function deleteEntry(filePath, searchPath, searchKey, searchValue) {
    const data = readData(filePath);
    let target = data;
    searchPath.split('.').forEach(key => {
        target = target[key];
    });
    const index = target.findIndex(item => item[searchKey] === searchValue);
    if (index !== -1) {
        target.splice(index, 1);
        createBackup(filePath);
        writeData(filePath, data);
    }
}

function searchEntry(filePath, searchPath, searchKey, searchValue) {
    const data = readData(filePath);
    let target = data;
    searchPath.split('.').forEach(key => {
        target = target[key];
    });
    return target.filter(item => item[searchKey] === searchValue);
}

module.exports = { addEntry, updateEntry, deleteEntry, searchEntry };
