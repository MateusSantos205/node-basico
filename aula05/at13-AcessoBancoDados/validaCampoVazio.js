// função que valida campo vazio
const validaCampoVazio = (campo, nome) => {
  if (campo == "") {
    res.json({
      retorno: "erro",
      mensagem: `Campo ${nome} não foi preenchido!`,
    });
  }
};

module.exports = {
  validaCampoVazio,
};
