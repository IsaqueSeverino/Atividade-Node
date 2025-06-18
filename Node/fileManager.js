import fs from 'fs/promises';

async function readJsonFile(filePath) {
  try {
    const jsonString = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonString);
    return data;
  } catch (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    throw err; 
  }
}

async function writeJsonFile(filePath, data) {
  try {
    const jsonString = JSON.stringify(data, null, 2); 
    await fs.writeFile(filePath, jsonString, 'utf-8');
    console.log(`Arquivo ${filePath} salvo com sucesso!`);
  } catch (err) {
    console.error('Erro ao escrever o arquivo JSON:', err);
    throw err;
  }
}

module.exports = {
    readJsonFile,
    writeJsonFile
};