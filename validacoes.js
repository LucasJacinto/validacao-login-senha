function validacao() {
    const loginPadrao = /^[a-z0-9]+$/
    const loginInput = document.querySelector("#login").value   
    const msg = document.querySelector("#msg")
    
    const senhaPadrao = /^[^( )]+$/ 
    const senhaInput = document.querySelector("#senha").value
     
    if (!loginPadrao.test(loginInput)) { // Compara o value do input com o padrão e retorna true ou false.
        msg.innerHTML = "<font color='red'><p>O login não pode conter espaços, letras maiúsculas ou caracteres especiais.</p></font>"
        return
    }

    if (!senhaPadrao.test(senhaInput)) {
        msg.innerHTML = "<font color='red'><p>A senha não pode conter espaços!</p></font>"
        return
    }
    
    msg.innerHTML = ' '
}
