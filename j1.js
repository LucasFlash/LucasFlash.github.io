
let votar = document.querySelector('#votar');
votar.addEventListener('click', () => {
    const candidatoSeleccionado = document.querySelector('input[name="candidate"]:checked');
    if (candidatoSeleccionado) {
        const candidato = candidatoSeleccionado.value;
        let votos = localStorage.getItem(candidato);
        votos = votos ? parseInt(votos) + 1 : 1;
        localStorage.setItem(candidato, votos);
        location.reload();
        alert('¡Voto registrado con éxito!');
    } else {
        alert('Por favor, seleccione un candidato.');
    }
});

let resultados = document.querySelector('#resultado');
resultados.addEventListener('click', () => {
    const resultadosDiv = document.getElementById('resultados');
    const candidatos = ['P. Conservador', 'P. Popular', 'P. Izquierda', 'P. Conservador1', 'P. Popular1', 'P. Izquierda1'];
    resultadosDiv.innerHTML = '';
    candidatos.forEach(candidato => {
        const votos = localStorage.getItem(candidato) || 0;
        resultadosDiv.innerHTML += `<br><p>${candidato}: ${votos} votos</p>`;
    });
});

//16 miembros para Brooklyn.//
//14 miembros para Queens.//
//10 miembros para Manhattan.//
//8 miembros para el Bronx.//
//3 miembros para Staten Island.//;
