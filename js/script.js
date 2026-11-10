document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const feedbackMessage = document.getElementById('feedbackMessage');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset de mensagens de erro
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    feedbackMessage.className = 'feedback hidden';

    let isValid = true;

    // Validação de Nome
    if (nameInput.value.trim().length < 3) {
      nameError.textContent = 'Informe um nome válido (mínimo de 3 caracteres).';
      isValid = false;
    }

    // Validação de E-mail
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Informe um e-mail válido com formato nome@dominio.com.';
      isValid = false;
    }

    // Validação de Mensagem
    if (messageInput.value.trim().length < 10) {
      messageError.textContent = 'A mensagem deve conter ao menos 10 caracteres.';
      isValid = false;
    }

    // Simulação de envio com sucesso
    if (isValid) {
      feedbackMessage.textContent = `Mensagem simulada com sucesso! Obrigado pelo contato, ${nameInput.value.trim()}.`;
      feedbackMessage.className = 'feedback success';
      form.reset();
    }
  });
});