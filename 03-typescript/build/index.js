"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (_, res) => res.send('Hello World'));
app.get('/identity', (req, res) => {
    const names = ['john', 'arthur', 'thomas'];
    const numbers = [1, 2, 3];
    const personArray = [{ name: 'Arthur', age: 23 }];
    function identity(arg) {
        return arg;
    }
    const typedNames = identity(names);
    const typedNumbers = identity(numbers);
    const typedObject = identity(personArray);
    res.send({ typedNames, typedNumbers, typedObject });
});
app.get('/convert', (req, res) => {
    const { number = '' } = req.query; // type assertion
    const convert = (number) => +number;
    const result = convert(number);
    res.send({ result });
});
app.listen(8080, () => console.log('✨ Listening...'));
