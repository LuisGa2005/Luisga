// Arreglo inicial de proyectos de animación y 3D
let proyectos = [
    { titulo: "Rigging de Personaje", software: "Blender", frames: 120, estado: "En proceso" },
    { titulo: "Escultura Zorro Low Poly", software: "Blender", frames: 1, estado: "Terminado" },
    { titulo: "Simulación de Océano", software: "Maya", frames: 250, estado: "En proceso" }
];

console.log("=== ESTADO INICIAL ===");
console.log(proyectos);


// ==========================================
// 1. Ejercicio de arreglos con forEach para agregar elementos
// ==========================================
console.log("\n--- 1. FOREACH PARA AGREGAR ELEMENTOS ---");

// Lista de nuevos proyectos que queremos procesar y agregar
let nuevosProyectos = [
    { titulo: "Animación de Caminata", software: "Blender", frames: 48, estado: "Pendiente" },
    { titulo: "Modelado de Utilería", software: "Maya", frames: 1, estado: "Terminado" }
];

// Usamos forEach para recorrer la nueva lista y agregarlos al arreglo principal usando push()
nuevosProyectos.forEach(nuevo => {
    proyectos.push(nuevo);
    console.log(`Proyecto agregado con éxito: "${nuevo.titulo}" (${nuevo.software})`);
});

console.log("Arreglo después de forEach:");
console.log(proyectos);


// ==========================================
// 2. Ejercicio de generación de un subconjunto de elementos
// ==========================================
console.log("\n--- 2. GENERACIÓN DE SUBCONJUNTO (FILTER Y MAP) ---");

// Subconjunto A: Filtrar solo los proyectos que se están realizando en "Blender" usando filter()
let proyectosBlender = proyectos.filter(proj => proj.software === "Blender");
console.log("Subconjunto de proyectos en Blender:", proyectosBlender);

// Subconjunto B: Generar una lista (arreglo) únicamente con los títulos de todos los proyectos usando map()
let titulosProyectos = proyectos.map(proj => proj.titulo);
console.log("Subconjunto de solo los títulos de los proyectos:", titulosProyectos);


// ==========================================
// 3. Ejercicio de operaciones CRUD en JavaScript
// ==========================================
console.log("\n--- 3. OPERACIONES CRUD BÁSICO ---");

// CREATE (Crear)
function crearProyecto(proyecto) {
    proyectos.push(proyecto);
    console.log(`[CREATE] Proyecto creado: "${proyecto.titulo}".`);
}

// READ (Leer)
function leerProyectos() {
    console.log("[READ] Lista actual de proyectos:");
    proyectos.forEach((proj, index) => {
        console.log(`  ${index + 1}. ${proj.titulo} [${proj.software}] - Estado: ${proj.estado}`);
    });
}

// UPDATE (Actualizar)
function actualizarProyecto(titulo, cambios) {
    const proyecto = proyectos.find(proj => proj.titulo === titulo);
    if (proyecto) {
        Object.assign(proyecto, cambios);
        console.log(`[UPDATE] Proyecto "${titulo}" actualizado correctamente.`);
    } else {
        console.log(`[UPDATE] No se encontró el proyecto: "${titulo}".`);
    }
}

// DELETE (Borrar usando filter)
function borrarProyecto(titulo) {
    const longitudAntes = proyectos.length;
    proyectos = proyectos.filter(proj => proj.titulo !== titulo);
    
    if (proyectos.length < longitudAntes) {
        console.log(`[DELETE] Proyecto eliminado: "${titulo}".`);
    } else {
        console.log(`[DELETE] No se encontró el proyecto "${titulo}" para eliminar.`);
    }
}

// --- Probando el CRUD ---
crearProyecto({ titulo: "Shader de Piel Cel-Shading", software: "Blender", frames: 1, estado: "Pendiente" });
leerProyectos();

actualizarProyecto("Animación de Caminata", { estado: "Terminado", frames: 60 });
leerProyectos();

borrarProyecto("Simulación de Océano");
leerProyectos();