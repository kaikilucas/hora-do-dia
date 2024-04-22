function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 20;
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = "imagens/manhatamanhok.png"
        document.body.style.background = "#c29568"
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = "imagens/tardetamanhook.png"
        document.body.style.background = "#cbc4be"
    } else {
        // BOA NOITE
        img.src = "imagens/noitetamanhook.png"
        document.body.style.background = "#3a7fb6"
    }
}

