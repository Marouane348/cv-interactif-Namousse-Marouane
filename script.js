document.addEventListener("DOMContentLoaded", function () {
    
    
    const textElement = document.getElementById("typing-text");
    const texts = ["Student at FSSM", "Web Developer", "C/C++ Enthusiast", "Tech Learner"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    
    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        textElement.textContent = letter;
        
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    })();

    
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function showProgress() {
        progressBars.forEach(progressBar => {
            const value = progressBar.getAttribute('data-width');
            progressBar.style.width = value;
        });
    }

    function hideProgress() {
        progressBars.forEach(progressBar => {
            progressBar.style.width = '0%';
        });
    }


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showProgress();
            } else {
                hideProgress();
            }
        });
    }, { threshold: 0.2 });

    observer.observe(skillsSection);

    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if(menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });
});