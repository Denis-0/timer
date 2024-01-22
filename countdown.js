document.addEventListener("DOMContentLoaded", function () {
    // Устанавливаем время завершения
    const endTime = new Date("2024-02-20T18:00:00");

    // Вычисляем разницу между текущим временем и временем завершения
    let secondsLeft = Math.floor((endTime - new Date()) / 1000);

    // Получаем элементы для отображения времени
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Функция обновления таймера
    function updateTimer() {
        const days = Math.floor(secondsLeft / (3600 * 24));
        const hours = Math.floor((secondsLeft % (3600 * 24)) / 3600);
        const minutes = Math.floor((secondsLeft % 3600) / 60);
        const seconds = secondsLeft % 60;

        // Обновляем отображение времени
        daysElement.textContent = days;
        hoursElement.textContent = hours.toString().padStart(2, "0");
        minutesElement.textContent = minutes.toString().padStart(2, "0");
        secondsElement.textContent = seconds.toString().padStart(2, "0");

        // Уменьшаем счетчик
        secondsLeft--;

        // Проверяем, завершен ли таймер
        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            // Действия, когда таймер завершен
            console.log("Отпуск!");
        }
    }

    // Обновляем таймер сразу после загрузки страницы
    updateTimer();

    // Запускаем таймер, обновляя каждую секунду
    const timerInterval = setInterval(updateTimer, 1000);
});
