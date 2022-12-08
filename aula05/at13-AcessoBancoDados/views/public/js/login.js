const validarLogin = () => {
  let email = $("#email").val();
  let senha = $("#senha").val();

  // validação front end de campos vazios

  if (email == "") {
    Swal.fire({
      icon: "error",
      title: "Atenção!",
      text: "Preencha o campo email!",
    });
    return;
  }

  if (senha == "") {
    Swal.fire({
      icon: "error",
      title: "Atenção!",
      text: "Preencha o campo senha!",
    });
    return;
  }


const result = fetch("/validar/login", {
  method: "POST",
  body: `email=${email}&senha=${senha}`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then((response) => response.json())
  .then((result) => {
    if (result.retorno == "ok") {
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: result.mensagem,
      });

      // limpa formulario
      $("#form-login")[0].reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Atenção!",
        text: result.mensagem,
      });
    }
  });

}
