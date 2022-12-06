// fun~ção que cadastra login

const cadastrarLogin = () =>{
    // captura os dados do form
    let nome = $('#nome').val()
    let email = $('#email').val()
    let senha = $('#senha').val()
    let confirmar = $('#confirmar').val()

    const result = fetch('/cadastrar/login',{
        method: 'POST',
        body: `nome=${nome}&email=${email}&senha=${senha}&confirmar=${confirmar}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((response) => response.json())
    .then((result)=>{
        if(result.retorno == 'ok'){
            Swal.fire({
                "icon": 'success',
                "title": 'Sucesso!',
                "text": result.mensagem
            })
        }else{
            Swal.fire({
                "icon": 'error',
                "title": 'Atenção!',
                "text": result.mensagem
            })
        }
    })
    
}
