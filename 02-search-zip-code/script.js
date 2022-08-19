function login() {
  event.preventDefault();

  const cep = document.getElementById('cep').value;

  console.log(cep);

  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('col-cep').innerText = data.cep;
      document.getElementById('col-bairro').innerText = data.bairro;
      document.getElementById('col-estado').innerText = data.uf;
      document.getElementById('col-endereco').innerText = data.logradouro;
    });
}
