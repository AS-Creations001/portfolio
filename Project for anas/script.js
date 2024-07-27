document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const totalClasses = parseInt(document.getElementById('totalClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);

    if (totalClasses && attendedClasses && totalClasses >= attendedClasses) {
        const attendancePercentage = (attendedClasses / totalClasses) * 100;
        document.getElementById('result').innerText = `${name}, your attendance is ${attendancePercentage.toFixed(2)}%`;
    } else {
        document.getElementById('result').innerText = `Please enter valid numbers for classes.`;
    }
});
