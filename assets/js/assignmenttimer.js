const dueDateElement = document.querySelector('.duedate');
const countdownElement = document.querySelector('#assignment-countdown');

const getDueDate = (dateText) => {
	const dateParts = dateText.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);

	if (!dateParts) {
		return null;
	}

	const [, day, month, year] = dateParts;
	return new Date(year, month - 1, day, 23, 59, 59);
};

const formatTimeLeft = (millisecondsLeft) => {
	const totalSeconds = Math.floor(millisecondsLeft / 1000);
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor((totalSeconds % 86400) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const updateAssignmentTimer = () => {
	const dueDate = getDueDate(dueDateElement.textContent.trim());
	const millisecondsLeft = dueDate - Date.now();

	if (millisecondsLeft <= 0) {
		countdownElement.textContent = 'Due';
		return;
	}

	countdownElement.textContent = formatTimeLeft(millisecondsLeft);
};

updateAssignmentTimer();
setInterval(updateAssignmentTimer, 1000);
