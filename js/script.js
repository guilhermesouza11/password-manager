const form = document.querySelector("#myForm");
const listPasswords = document.querySelector("#listPasswords");
const passwords = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getFormData();
})

function getFormData(){
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);
    passwords.push(dados) // Aqui, estou passando as informações de cada senha salva, para o array "passwords".
    
    dados["timestamp"] = Date.now(); //Inserindo o timestamp no objeto com as informações a serem salvas
    dados["createdAt"] = new Date().toLocaleDateString('pt-BR'); //Inserindo o createdAt no objeto com as informações a serem salvas

    if(dados.nameservice.trim() === ""){
        alert("Preencha o nome do serviço que deseja salvar!")
    }else if(dados.useremail.trim() === ""){
        alert("Preencha o campo com o Usário ou Email que deseja salvar!")
    }else if(dados.password.trim() === ""){
        alert("Preencha o campo da senha que deseja salvar!")
    }else{
        return passwords
    }

    form.reset(); //Retorna todo o formulário no seu status inicial
    form.nameservice.focus(); //Faz com que o foco seja no primeiro input logo após o envio

    console.log("Guilherme.Souza")
}