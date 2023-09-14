function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 00 && hora < 12 ){
        img.src = 'manha.png'
        document.body.style.background = '#369de0'
    } else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#fe8402'
    } else{
        img.src = 'noite.png'
        document.body.style.background = '#06294d'
    }
}