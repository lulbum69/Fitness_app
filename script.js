const activityList = document.getElementById("activity-list");
const days = document.querySelectorAll(".day");

days.forEach(day => {
    day.addEventListener("click", () => {
        const selectedDay = day.dataset.day;
        activityList.innerHTML = `<p>Activities for <strong>${selectedDay}</strong> will appear here.</p>`;
    });
});
