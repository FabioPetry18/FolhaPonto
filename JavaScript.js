function horario() {
   let hoje = new Date();
   let entrada = document.getElementById("entrada").value;
   let saida = document.getElementById("saida").value;
   if (!entrada || !saida ) {
       alert("hora de entrada ou saida nao pode ser vazio!")
       return false;     
    }

   let entradaDate = new Date(hoje.toDateString() + ' ' + entrada);
   let saidaDate = new Date(hoje.toDateString() + ' ' + saida);
   
   if (saidaDate <= entradaDate) {
        alert("Hora de saída não pode ser menor ou igual ao da entrada");

        return false;  
    }

    let tempoMs = saidaDate.getTime() - entradaDate.getTime();
    let horaMinuto = msParaHoraMinuto(tempoMs);
    document.getElementById("teste").innerHTML = `<p>Horas trabalhadas: ${horaMinuto}</p>`;
  
 }

function msParaHoraMinuto(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return formatar(hrs) + ':' + formatar(mins);
    }

    function formatar(n, z) {
    z = z || 2;

    return ('00' + n).slice(-z);
    }
