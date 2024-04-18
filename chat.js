document.addEventListener('DOMContentLoaded', function() {
    const messages = document.getElementById('chatMessages');
    const newMessages = [
        "<li><strong>Harley Quinn:</strong> ¡Necesito más explosivos! ¿Alguien puede compartir?</li>",
        "<li><strong>Black Manta:</strong> He tomado el control de los siete mares, ¿alguien necesita un poco de agua?</li>"
    ];

    newMessages.forEach((msg, index) => {
        setTimeout(() => {
            messages.innerHTML += msg;
        }, (index + 1) * 5000); // Añade mensajes cada 5 segundos
    });
});
