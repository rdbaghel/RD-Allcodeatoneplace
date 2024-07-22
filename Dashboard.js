const navLinks = document.querySelectorAll('#navList a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active class from all links
        navLinks.forEach(item => item.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
      });
    });

const tabs = document.querySelectorAll('.tab');
const boxes = document.querySelectorAll('.box');

    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabData = this.getAttribute('data-tab');
        tabs.forEach(item => item.classList.remove('active'));
        boxes.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        document.querySelector(`.box[data-tab="${tabData}"]`).classList.add('active');
      });
    });

const progressButtons = document.querySelectorAll('.box button');
      progressButtons.forEach(button => {
      button.addEventListener('click', function() {
        const progressBar = this.parentElement.querySelector('p');
        const currentProgress = parseInt(progressBar.textContent);
        if (currentProgress < 100) {
          progressBar.textContent = `${currentProgress + 5}% - progress`;
        } else {
          progressBar.textContent = `100% - progress`;
          this.disabled = true; 
        }
      });
    });

    // Wallet section

document.addEventListener("DOMContentLoaded", function() {
  
  let walletAmount = 1100; 
  const walletAmountElement = document.getElementById("walletAmount");
  const addFundsButton = document.getElementById("addFundsButton");
  const withdrawFundsButton = document.getElementById("withdrawFundsButton");

  walletAmountElement.textContent = "Rupees = " + walletAmount.toFixed(2);

  addFundsButton.addEventListener("click", function() {
    walletAmount += 150;
    walletAmountElement.textContent = "Rupees = " + walletAmount.toFixed(2);
    alert("Funds added successfully!");
  });

  withdrawFundsButton.addEventListener("click", function() {
    if (walletAmount >= 500) {
      walletAmount -= 100;
      walletAmountElement.textContent = "Rupees =  " + walletAmount.toFixed(2);
      alert("Funds withdrawn successfully!");
    } 
    else {
      alert("Insufficient funds!");
    }
  });
});



   // Analytics section

document.addEventListener("DOMContentLoaded", function() {
  
  const analyticsGraphElement = document.getElementById("analyticsGraph");
  setTimeout(function() {
    analyticsGraphElement.innerHTML = "<p>Analytics Data</p>";
  }, 3000);

});

