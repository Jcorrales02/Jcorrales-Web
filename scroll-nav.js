
    document.addEventListener('mousemove', e => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.body.style.setProperty('--x', `${x}%`);
        document.body.style.setProperty('--y', `${y}%`);
    });

        const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 1.5) {
            currentSection = section.getAttribute("id");
        }
        });

        navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
        });
    });




const botonesAbrir = document.querySelectorAll('.ver-diploma-btn');
const botonesCerrar = document.querySelectorAll('.cerrar-modal');

botonesAbrir.forEach(boton => {
    boton.addEventListener('click', function(e) {
    e.preventDefault();
    const idModal = this.getAttribute('data-modal');
    const modal = document.getElementById(idModal);

    modal.classList.add('activo');
    setTimeout(() => {
        modal.style.display = 'flex';
    }, 0);

    document.body.classList.add('body-sin-scroll');
    });
});

botonesCerrar.forEach(cerrar => {
    cerrar.addEventListener('click', function() {
    const modal = this.closest('.modal');
    modal.classList.remove('activo');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    document.body.classList.remove('body-sin-scroll');
    });
});

window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
    e.target.classList.remove('activo');
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 300);
    document.body.classList.remove('body-sin-scroll');
    }
});
