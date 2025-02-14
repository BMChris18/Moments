document.addEventListener("DOMContentLoaded", function () {
    // Mostrar la primera pregunta al cargar la página
    document.getElementById("question1").style.display = "block";
});

function nextQuestion(isCorrect, nextId) {
    if (isCorrect) {
        // Mostrar mensaje de felicitación
        let messageBox = document.createElement("div");
        messageBox.innerText = "¡¡¡¡TE AMO!!!! 💖";
        messageBox.classList.add("success-message");
        document.body.appendChild(messageBox);

        // Ocultar mensaje después de 1.5 segundos y avanzar a la siguiente pregunta
        setTimeout(() => {
            document.querySelectorAll(".question").forEach(q => q.style.display = "none");
            document.getElementById(nextId).style.display = "block";
            messageBox.remove();
        }, 1500);
    } else {
        alert("Respuesta incorrecta. Volviendo al inicio.");
        location.reload();
    }
}