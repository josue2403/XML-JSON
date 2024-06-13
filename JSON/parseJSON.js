const fs = require('fs');

// Leer el archivo JSON
fs.readFile('index.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error al leer el archivo JSON:", err);
        return;
    }

    // Parsear el JSON
    const jsonData = JSON.parse(data);

    // Extraer información de la materia
    const materia = jsonData.Materia;
    const materiaNombre = materia.Nombre;
    const materiaCodigo = materia.Codigo;
    const materiaDescripcion = materia.Descripcion;
    const materiaCreditos = materia.Creditos;

    // Extraer información del estudiante
    const estudiante = materia.Estudiante;
    const estudianteNombre = estudiante.Nombre;
    const estudianteCurso = estudiante.Curso;

    // Extraer información del profesor
    const profesor = materia.Profesor;
    const profesorNombre = profesor.Nombre;
    const profesorCorreo = profesor.Correo;
    const profesorHorario = profesor.Horario;

    // Extraer información de los temas
    const temas = materia.Temas;

    // Mostrar la información en la consola
    console.log("Materia:", materiaNombre);
    console.log("Código:", materiaCodigo);
    console.log("Descripción:", materiaDescripcion);
    console.log("Créditos:", materiaCreditos);

    console.log("Estudiante:");
    console.log("  Nombre:", estudianteNombre);
    console.log("  Curso:", estudianteCurso);

    console.log("Profesor:");
    console.log("  Nombre:", profesorNombre);
    console.log("  Correo:", profesorCorreo);
    console.log("  Horario:", profesorHorario);

    temas.forEach((tema, index) => {
        console.log(`Tema ${index + 1}:`);
        console.log("  Nombre:", tema.Nombre);
        console.log("  Descripción:", tema.Descripcion);
    });
});
