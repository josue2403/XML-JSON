const fs = require('fs');
const { DOMParser } = require('@xmldom/xmldom');

// Leer el archivo XML
fs.readFile('index.xml', 'utf8', (err, data) => {
    if (err) {
        console.error("Error al leer el archivo XML:", err);
        return;
    }

    // Parsear el XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");

    // Función para obtener el valor de un elemento por su etiqueta
    function getElementValue(parent, tagName) {
        const element = parent.getElementsByTagName(tagName)[0];
        return element ? element.textContent : null;
    }

    // Obtener información de la materia
    const materia = xmlDoc.getElementsByTagName("Materia")[0];
    const materiaNombre = getElementValue(materia, "Nombre");
    const materiaCodigo = getElementValue(materia, "Codigo");
    const materiaDescripcion = getElementValue(materia, "Descripcion");
    const materiaCreditos = getElementValue(materia, "Creditos");

    // Obtener información del estudiante
    const estudiante = xmlDoc.getElementsByTagName("Estudiante")[0];
    const estudianteNombre = getElementValue(estudiante, "Nombre");
    const estudianteCurso = getElementValue(estudiante, "Curso");

    // Obtener información del profesor
    const profesor = xmlDoc.getElementsByTagName("Profesor")[0];
    const profesorNombre = getElementValue(profesor, "Nombre");
    const profesorCorreo = getElementValue(profesor, "Correo");
    const profesorHorario = getElementValue(profesor, "Horario");

    // Obtener información de los temas
    const temas = xmlDoc.getElementsByTagName("Tema");
    const temasInfo = [];
    for (let i = 0; i < temas.length; i++) {
        const temaNombre = getElementValue(temas[i], "Nombre");
        const temaDescripcion = getElementValue(temas[i], "Descripcion");
        temasInfo.push({ nombre: temaNombre, descripcion: temaDescripcion });
    }

    // Mostrar la información en la consola
    console.log("Materia:", materiaNombre);
    console.log("Código:", materiaCodigo);
    console.log("Descripción:", materiaDescripcion);
    console.log("Créditos:", materiaCreditos);

    console.log("Estudiante:", estudianteNombre);
    console.log("Curso:", estudianteCurso);

    console.log("Profesor:", profesorNombre);
    console.log("Correo:", profesorCorreo);
    console.log("Horario:", profesorHorario);

    temasInfo.forEach((tema, index) => {
        console.log(`Tema ${index + 1}:`);
        console.log("Nombre:", tema.nombre);
        console.log("Descripción:", tema.descripcion);
    });
});
