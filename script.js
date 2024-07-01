function registerUser() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // Simulate registration (replace with actual backend logic)
    if (username && password) {
        // Assuming successful registration
        alert('Registration successful!');
        document.getElementById('userForm').style.display = 'none';
        document.getElementById('tripForm').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
}

function bookTrip() {
    var from = document.getElementById('from').value.trim();
    var to = document.getElementById('to').value.trim();
    var date = document.getElementById('date').value.trim();

    // Simulate booking trip and getting details (replace with actual backend logic)
    if (from && to && date) {
        // Assuming successful booking and trip details retrieval
        document.getElementById('tripFrom').textContent = from;
        document.getElementById('tripTo').textContent = to;
        document.getElementById('tripDate').textContent = date;
        document.getElementById('tripDriver').textContent = 'John Doe'; // Example driver name
        document.getElementById('tripForm').style.display = 'none';
        document.getElementById('tripDetails').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
}
