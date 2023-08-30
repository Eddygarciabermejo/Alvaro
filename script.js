// script.js
document.addEventListener("DOMContentLoaded", function () {
    const dayButtons = document.querySelectorAll(".day-button");
    const dayContent = document.querySelector(".day-content");
    const toggleMenuButton = document.getElementById("toggle-menu");
    const sidebar = document.querySelector(".sidebar");

    // Manejar clic en el botón para mostrar/ocultar el menú
    toggleMenuButton.addEventListener("click", function () {
        sidebar.classList.toggle("open"); // Agrega o quita la clase 'open'
    });

    dayButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Obtener el contenido del día seleccionado
            const mealDetails = getMealDetails(button.textContent);

            // Mostrar el contenido en la sección de detalles
            dayContent.innerHTML = mealDetails;

            // Si el menú está abierto en dispositivos móviles, ciérralo después de seleccionar un día
            if (window.innerWidth <= 768 && sidebar.classList.contains("open")) {
                sidebar.classList.remove("open");
            }
        });
    });

    function getMealDetails(day) {
        // Implementa una función para obtener los detalles de las comidas del día seleccionado
        // Puedes usar un objeto o una estructura de datos para almacenar esta información
        // y retornarla en función del día seleccionado.
        // Ejemplo:
        const mealDetails = {
            Lunes: `
                <p>Lunes</p>
                <p>Desayuno: Omelette de claras de huevo con espinacas y tomates + rebanada de pan integral.</p>
                <p>Almuerzo: Ensalada de pollo a la parrilla con lechuga, pepinos, tomates y vinagreta de aceite de oliva.</p>
                <p>Cena: Salmón al horno con brócoli y quinua cocida.</p>
            `,
            Martes: `
                <!-- Detalles para el Martes -->
            `,
            // Continúa con los demás días...
        };

        return mealDetails[day] || "No se encontraron detalles para este día.";
    }
});
