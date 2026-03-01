const form = document.querySelector("#myForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getFormData();
})

function getFormData(){
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData); 

    if(dados.nameservice.trim() === ""){
        alert("Preencha o nome do serviço que deseja salvar!")
    }else if(dados.useremail.trim() === ""){
        alert("Preencha o campo com o Usário ou Email que deseja salvar!")
    }else if(dados.password.trim() === ""){
        alert("Preencha o campo da senha que deseja salvar!")
    }else{
        console.log(dados)
    }

    form.reset(); //Retorna todo o formulário no seu status inicial
    form.nameservice.focus(); //Faz com que o foco seja no primeiro input logo após o envio
}