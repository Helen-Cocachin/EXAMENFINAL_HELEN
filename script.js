document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Guardamos el tema preferido en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Al cargar la página, restauramos el tema preferido
window.addEventListener('load', function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});


// Filtrar habilidades
const filterInput = document.getElementById('filter-skills');
const skillsList = document.getElementById('skills-list');

filterInput.addEventListener('input', () => {
    const filterValue = filterInput.value.toLowerCase();
    const skills = skillsList.querySelectorAll('.list-group-item');

    skills.forEach(skill => {
        if (skill.textContent.toLowerCase().includes(filterValue)) {
            skill.style.display = 'block';
        } else {
            skill.style.display = 'none';
        }
    });
});

// Animación en scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        } else {
            entry.target.classList.remove('animate-fade-in');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtención de los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validación simple
    if (name === '' || email === '') {
        document.getElementById('form-feedback').innerHTML = '<p class="error">Todos los campos son obligatorios.</p>';
    } else if (!validateEmail(email)) {
        document.getElementById('form-feedback').innerHTML = '<p class="error">Por favor, ingresa un correo válido.</p>';
    } else {
        document.getElementById('form-feedback').innerHTML = '<p class="success">Formulario enviado con éxito. ¡Gracias por contactarme!</p>';
        // Aquí podrías integrar la lógica para enviar el formulario, por ejemplo, utilizando un servicio de backend
        // o un servicio de correo como EmailJS o SMTP.
        this.reset(); // Limpia los campos del formulario
    }
});

// Función de validación del correo
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}