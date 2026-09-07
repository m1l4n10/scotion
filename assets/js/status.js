const statusSelect = document.querySelector('#assignment-status');
const statusStorageKey = 'scotion-assignment-status';
const availableStatuses = new Set(
    Array.from(statusSelect.options, (option) => option.value)
);

const savedStatus = localStorage.getItem(statusStorageKey);

if (availableStatuses.has(savedStatus)) {
    statusSelect.value = savedStatus;
}

const updateStatusAppearance = () => {
    statusSelect.dataset.status = statusSelect.value;
};

updateStatusAppearance();

statusSelect.addEventListener('change', () => {
    localStorage.setItem(statusStorageKey, statusSelect.value);
    updateStatusAppearance();
});