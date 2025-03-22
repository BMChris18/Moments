document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("question1").style.display = "block";
});

function nextQuestion(isCorrect, nextId) {
    if (isCorrect) {
        let messageBox = document.createElement("div");
        messageBox.innerText = "¡¡¡Bien hecho!!! 💖";
        messageBox.classList.add("success-message");
        document.body.appendChild(messageBox);

        setTimeout(() => {
            document.querySelectorAll(".question").forEach(q => q.style.display = "none");
            messageBox.remove();

            let nextQuestionElement = document.getElementById(nextId);
            if (nextQuestionElement) {
                nextQuestionElement.style.display = "block";
                console.log("✅ Mostrando:", nextId);
                
                // ACTIVAR CAMBIO DE TEMA AL LLEGAR A LA PREGUNTA 100
                if (nextId === "question100") {
                    cambiarTema();
                }
            } else {
                console.error("❌ ERROR: No se encontró la pregunta con ID:", nextId);
            }
        }, 1500);
    } else {
        alert("Fallaste? :'c.");
        location.reload();
    }
}

// 🔄 FUNCIÓN PARA CAMBIAR EL TEMA
function cambiarTema() {
    console.log("🔄 Cambio de tema activado..."); // Para depuración

    // Cambiar el color de fondo de la página
    document.body.style.backgroundColor = "#FFF8DC"; // Fondo amarillo claro

    // Cambiar el color de fondo y el borde del contenedor
    let contenedor = document.querySelector(".container");
    if (contenedor) {
        contenedor.style.backgroundColor = "#FFEB3B"; // Amarillo vibrante
        contenedor.style.border = "5px solid #FFA500"; // Borde naranja
        contenedor.style.padding = "20px"; // Espaciado interno
        contenedor.style.borderRadius = "15px"; // Bordes redondeados
        contenedor.style.boxShadow = "0px 0px 15px rgba(255, 165, 0, 0.5)"; // Sombra naranja
    }

    // Cambiar el título de la página
    let titulo = document.querySelector("h1");
    if (titulo) {
        titulo.innerText = "🌻 Feliz 21 de marzo mi vida 🌻";
        titulo.style.color = "#FFA500";
    }

    // Cambiar la imagen principal
    let imagen = document.querySelector("img");
    if (imagen) {
        imagen.src = "gif1.gif";  // Cambia "animacion.gif" por tu archivo
        imagen.alt = "Animación en proceso";
    }

    // Cambiar los estilos de los botones
    document.querySelectorAll("button").forEach(btn => {
        btn.style.backgroundColor = "#FFD700"; // Amarillo oro
        btn.style.color = "#000"; // Texto negro
        btn.style.border = "3px solid orange"; // Borde naranja
        btn.style.padding = "10px 20px";
        btn.style.borderRadius = "8px";
    });

    // Ocultar TODAS las preguntas
    document.querySelectorAll('.question').forEach(q => q.style.display = 'none');

    // Mostrar la pregunta 6
    let pregunta100 = document.getElementById('question100');
    if (pregunta100) {
        pregunta100.style.display = 'block';
        console.log("✅ Pregunta 100 mostrada.");
    } else {
        console.error("❌ ERROR: No se encontró la pregunta 100.");
    }
}
