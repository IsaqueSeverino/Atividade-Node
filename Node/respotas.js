// QUESTAO 1

import { getYear, parseISO } from 'date-fns';

function caculateAge(dataNascimento) {

    const anoAtual = getYear(new Date());

    try {
        const data = parseISO(dataNascimento);
        const ano = getYear(data);

        const idade = anoAtual - ano;

        console.log("A sua idade é " + idade);
    } catch {
        console.log("Data inválida!");
    }
}

// QUESTAO 2

import { min, max, mean } from 'mathjs';

function media(listaDeNotas) {

    try {
        const media = mean(listaDeNotas);

        console.log("A média é " + media);
    } catch {
        console.log("Erro ao calcular média");
    }

}

function menor(listaDeNotas) {
    try {
        const menor = min(listaDeNotas);

        console.log("A menor nota é " + menor);
    } catch {
        console.log("Erro ao achar menor nota");
    }
}

function maior(listaDeNotas) {
    try {
        const maior = max(listaDeNotas);

        console.log("A maior nota é " + maior);

    } catch {
        console.log("Erro ao achar maior nota");
    }
}

/// QUESTAO 3

import _ from 'lodash';

const lista = [1, 2, 1, 2, 3, 4, 5, 7, 9, 10, 10, 11, 9, 12, 14, 14];


// a
const ordenado = _.sortBy(lista);
console.log('Ordenado:', ordenado);

// b
const semDuplicatas = _.uniq(lista);
console.log('Sem duplicatas:', semDuplicatas);

//c
const pares = _.filter(lista, (n) => n % 2 === 0);
console.log('Pares:', pares);

//d
const dobrados = _.map(lista, (n) => n * 2);
console.log('Dobro:', dobrados);

//e
const soma = _.sum(lista);
console.log('Soma:', soma);


// QUESTAO 4

import chalk from 'chalk';
import fs from 'fs/promises';

async function extrairEguardarUrls(caminhoArquivoEntrada) {
    try {
        const texto = await fs.readFile(caminhoArquivoEntrada, 'utf-8');

        const regexUrls = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;

        const urls = texto.match(regexUrls);

        if (urls && urls.length > 0) {

            const urlsUnicas = [...new Set(urls)];

            const conteudoParaSalvar = urlsUnicas.join('\n');

            await fs.writeFile(conteudoParaSalvar, 'utf-8');

            console.log(chalk.green("URLs salvas: " + conteudoParaSalvar));
        } else {
            console.log('Nenhuma URL encontrada no arquivo.');
        }
    } catch (err) {
        console.error('Erro:', err);
    }
}

extrairEguardarUrls("questao4.txt");

// QUESTAO 5

const fileManager = require('./fileManager');




