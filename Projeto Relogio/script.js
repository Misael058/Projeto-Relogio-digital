const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio= setInterval(function time () {
    let dataHoje= new Date();
    let horaHoje= dataHoje.getHours();
    let minuHoje=dataHoje.getMinutes();
    let segunHoje=dataHoje.getSeconds();
    if (horaHoje <10) horaHoje = '0' + horaHoje;
    if (minuHoje <10) minuHoje = '0' + minuHoje;
    if (segunHoje <10) segunHoje = '0' + segunHoje;




    horas.textContent=horaHoje;
    minutos.textContent=minuHoje;
    segundos.textContent=segunHoje;
})

relogio();