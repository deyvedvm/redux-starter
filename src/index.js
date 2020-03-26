import {compose, pipe} from 'lodash/fp';

let input = "    Typescript     ";

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toUpperCase = str => str.toUpperCase();

const transform = pipe(trim, toUpperCase, wrap("div"));

const result = transform(input);

console.log(result);

