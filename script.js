document.addEventListener('DOMContentLoaded', function () {
    const calendarTable = document.getElementById('calendar');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Create header row with days of the week
    const headerRow = calendarTable.createTHead().insertRow();
    daysOfWeek.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });

    // Create calendar cells
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 1).getDay();
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        const row = calendarTable.insertRow();

        for (let j = 0; j < 7; j++) {
            const cell = row.insertCell();

            if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
                // Empty cells before the first day and after the last day
                cell.textContent = '';
            } else {
                cell.textContent = dayCounter;
                dayCounter++;

                // Highlight Saturdays and Sundays
                if (j === 6) {
                    cell.classList.add('saturday');
                } else if (j === 0) {
                    cell.classList.add('sunday');
                }

                // Highlight today's date
                if (
                    currentDate.getFullYear() === new Date().getFullYear() &&
                    currentDate.getMonth() === new Date().getMonth() &&
                    parseInt(cell.textContent) === new Date().getDate()
                ) {
                    cell.classList.add('today');
                }
            }
        }
    }
});
