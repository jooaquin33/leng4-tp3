const btnSubir = document.getElementById('btnSubir');
const inputFile = document.getElementById('inputFile');
const resultado = document.getElementById('resultado');
const infoArchivo = document.getElementById('infoArchivo');
const vistaPrevia = document.getElementById('vistaPrevia');


btnSubir.addEventListener('click', () => {
    inputFile.click();
});


inputFile.addEventListener('change', (evento) => {

    const archivo = evento.target.files[0];

    if (archivo) {

        resultado.style.display = 'block';

        infoArchivo.innerHTML = `
            Nombre: ${archivo.name} <br>
            Tipo: ${archivo.type} <br>
            Tamaño: ${archivo.size} bytes
        `;


        const lector = new FileReader();

        lector.onload = function(e) {

            vistaPrevia.src = e.target.result;
        }

        lector.readAsDataURL(archivo);
    }
});
