const meta = {
  cpf: '123.456-789-00',
  email: 'myemail@email.com',
  expected_address: [
    {
      city: 'são paulo',
      postal_code: '10001-123',
      state: 'sp',
    },
  ],
  phones: ['5585 99999-9999'],
};

const metaArray = [];

Object.keys(meta).forEach((key, index) => {
  metaArray.push({
    id: index,
    title: key,
    description:
      typeof meta[key] === 'string' ? meta[key] : JSON.parse(JSON.stringify(meta[key][0])),
  });
});

console.log(metaArray);
