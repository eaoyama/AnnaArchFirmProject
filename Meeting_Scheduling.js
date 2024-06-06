// Date and Time validity on Meeting Schedule page
window.onload = function () {
    const dateInput = document.getElementById("date");
    const startTimeInput = document.getElementById("s_time");
    const warning = document.getElementById("warning");

    function checkDateTime() {
        const dateValue = dateInput.value;
        const startTimeValue = startTimeInput.value;

        if (!dateValue || !startTimeValue) {
            warning.style.display = "none";
            return;
        }

        const selectedDate = new Date(dateValue);
        const now = new Date();

        const [startHour, startMinute] = startTimeValue.split(':').map(Number);
        selectedDate.setHours(startHour, startMinute);
        const startDateTime = new Date(selectedDate);

        if (startDateTime < now) {
            warning.style.display = "block";
            warning.textContent = "Please check the date and time for accuracy.";
        } else {
            warning.style.display = "none";
        }
    }

    dateInput.addEventListener("change", checkDateTime);
    startTimeInput.addEventListener("change", checkDateTime);
};