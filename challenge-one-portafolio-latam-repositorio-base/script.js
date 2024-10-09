//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
document.querySelector('.contacto__formulario').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Captura los datos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !asunto || !mensaje) {
        alert('Por favor, complete todos los campos antes de enviar.');
        return;
    }

    const destinatario = 'nicole.bibiano@gmail.com';

    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent('Nombre: ' + nombre + '\n' + mensaje)}`;

    window.location.href = mailtoLink;
});