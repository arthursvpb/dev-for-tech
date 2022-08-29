import express from 'express';

const app = express();
app.get('/', (_, res) => res.send('Hello World'));

// Using generics https://www.typescriptlang.org/docs/handbook/2/generics.html
interface Person {
  name: string;
  age: number;
}

app.get('/identity', (req, res) => {
  const names = ['john', 'arthur', 'thomas'];
  const numbers = [1, 2, 3];
  const personArray: Person[] = [{ name: 'Arthur', age: 23 }];

  function identity<Type>(arg: Type[]) {
    return arg;
  }

  const typedNames = identity(names);
  const typedNumbers = identity(numbers);
  const typedObject = identity<Person>(personArray);

  res.send({ typedNames, typedNumbers, typedObject });
});

// http://localhost:8080/convert?number=10
interface ReqQuery {
  number: string;
}

app.get<{}, {}, {}, unknown>('/convert', (req, res) => {
  const { number = '' } = req.query as ReqQuery; // type assertion

  const convert = (number: string) => +number;

  const result = convert(number);

  res.send({ result });
});

app.listen(8080, () => console.log('✨ Listening...'));
