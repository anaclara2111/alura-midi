function tocaSom (seletorAudio) {
    const elemento - document.querySelector(selectorAudio);

    if (elemento && elemento.localName === "audio"){
        elemento.play();
    }
    else {
        //alert("elemento não encontrado");
        console.log("elemento não encontrado ou seletor inválido");
    }
}