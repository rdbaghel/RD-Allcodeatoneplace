  // JavaScript for handling interactions

    // Navigation active states
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

    // Course tabs
    const tabs = document.querySelectorAll('.tab');
    const boxes = document.querySelectorAll('.box');

    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabData = this.getAttribute('data-tab');
        // Remove active class from all tabs and boxes
        tabs.forEach(item => item.classList.remove('active'));
        boxes.forEach(item => item.classList.remove('active'));
        // Add active class to the clicked tab and corresponding box
        this.classList.add('active');
        document.querySelector(`.box[data-tab="${tabData}"]`).classList.add('active');
      });
    });

    // Simulating progress updates
    const progressButtons = document.querySelectorAll('.box button');

    progressButtons.forEach(button => {
      button.addEventListener('click', function() {
        const progressBar = this.parentElement.querySelector('p');
        const currentProgress = parseInt(progressBar.textContent);
        if (currentProgress < 100) {
          progressBar.textContent = `${currentProgress + 5}% - progress`; // Incrementing progress by 5%
        } else {
          progressBar.textContent = `100% - progress`; // Limiting progress to 100%
          this.disabled = true; // Disabling button after completion
        }
      });
    })
