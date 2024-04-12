const form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();   
    const campoAinput = document.getElementById('campoA');
    const campoBinput = document.getElementById('campoB');
    const mensagemErro = `Tente novamente!!! O número ${campoBinput.value} é menor do que o número ${campoAinput.value}`;
    const mensagemCorreto = `Está correto, o número ${campoBinput.value} é maior do que o número ${campoAinput.value}`;
    
    if(parseFloat(campoAinput.value) <= parseFloat(campoBinput.value)) {
        alert(mensagemCorreto);
    } else {     
        alert(mensagemErro);
    }
});
