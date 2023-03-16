const cep = document.querySelector("#cep");
const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};
cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");
  const options = {
    methoid: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://viacep.com.br/ws/${search}/json`, options)
    .then((resp) => {
      resp.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log("Deu erro" + error.messange);
    });

  console.log(cep.value);
});
