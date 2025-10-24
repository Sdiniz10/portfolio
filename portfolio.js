function dark () {
    document.body.classList.toggle ("darkmode")
}
let modal = document.getElementsByClassName("dialogo") [0]
let modal2 = document.getElementsByClassName("dialogo1") [0]

function abrir() {
    modal.showModal()
    modal.classList.add ("modal")
}

function fechar () {
    modal.close ()
}

function abrir1() {
    modal2.showModal()
    modal2.classList.add ("modal2")
}
function fechar1 () {
    modal2.close ()
}


