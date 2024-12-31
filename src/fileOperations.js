const fs = require('fs');

function readData(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeData(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function createBackup(filePath) {
  const backupPath = filePath.replace('.json', `_backup_${Date.now()}.json`);
  fs.copyFileSync(filePath, backupPath);
}

module.exports = { readData, writeData, createBackup };
