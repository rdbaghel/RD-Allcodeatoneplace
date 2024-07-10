// JavaScript to handle switching between tabs and form submissions

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.sidebar ul li a');
    const contentSections = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substr(1);
            activateTab(targetId);
        });
    });

    function activateTab(targetId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId + 'Content').classList.add('active');
    }

    // Form submission handling (you would typically send data to a server here)
    document.getElementById('clientForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const clientName = document.getElementById('clientName').value;
        const clientEmail = document.getElementById('clientEmail').value;
        console.log(`Client Name: ${clientName}, Email: ${clientEmail}`);
        // You can add AJAX request or any other logic to handle data submission
    });

    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const orderType = document.getElementById('orderType').value;
        const orderQuantity = document.getElementById('orderQuantity').value;
        console.log(`Order Type: ${orderType}, Quantity: ${orderQuantity}`);
        // You can add AJAX request or any other logic to handle data submission
    });

    // Example of displaying result details (would typically come from server)
    // This is a placeholder, actual implementation depends on your backend
    function displayResultDetails(results) {
        const resultDisplay = document.getElementById('resultDisplay');
        resultDisplay.innerHTML = `<p>${results}</p>`;
    }

    // Example usage: displayResultDetails("Results: ...");
});
