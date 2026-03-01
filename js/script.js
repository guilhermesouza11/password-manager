const form = document.querySelector("#myForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const dados = Object.fromEntries(formData); 

    console.log(dados);
})