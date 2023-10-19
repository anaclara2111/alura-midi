function tocaSom (seletorAudio) {
    const elemento - document.querySelector(selectorAudio);

    if (elemento && elemento.localName === "audio"){
        elemento.play();
    }
    else {
        //alert("elemento não encontrado");
        console.log("elemento não encontrado ou seletor inválido");
    }
    const listaDeTeclas = document.querySelectorA11(".tecla");

    //para
    for (let contador = 0; < listaDeTeclas.lehgth; contador++) {

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = "#som_${instrumento}"; //template string
    }
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        if (evento.code === "space" || evento.code === "Enter") {
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = funcition (){
        tecla.classList.remove("ativa");

