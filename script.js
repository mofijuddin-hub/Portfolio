const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});











// Animated Glass Navbar on Scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
 







// 3D Tilt on Images
document.querySelectorAll('.tilt-img').forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const bounds = img.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        const rotateY = ((mouseX / bounds.width) - 0.5) * 20;
        const rotateX = ((mouseY / bounds.height) - 0.5) * -20;

        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});



// Create Floating 3D Circles
const bg = document.querySelector('.floating-circles');

for (let i = 0; i < 12; i++) {
    let circle = document.createElement('span');
    
    let size = Math.random() * 120 + 80; // 80–200px
    circle.style.width = size + "px";
    circle.style.height = size + "px";
    
    circle.style.left = Math.random() * 100 + "vw";
    circle.style.animationDuration = (8 + Math.random() * 10) + "s";
    circle.style.animationDelay = Math.random() * 10 + "s";
    
    bg.appendChild(circle);
}

// Parallax Effect on Mouse Move
document.addEventListener("mousemove", (e) => {
    const circles = document.querySelectorAll(".floating-circles span");

    circles.forEach((circle, i) => {
        const speed = (i + 1) * 0.02;
        const x = (window.innerWidth - e.pageX * speed);
        const y = (window.innerHeight - e.pageY * speed);

        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
});















// 3D Tilt for Portfolio Cards
document.querySelectorAll('.port-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 25; 
        const rotateX = ((y / rect.height) - 0.5) * -25;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});
