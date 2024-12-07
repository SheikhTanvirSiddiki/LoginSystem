function validatePhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }
  
  function validatePassword(password) {
    return password.length >= 6;
  }
  
  const registerForm = document.querySelector('form[action="/register"]');
  if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
      const phone = document.querySelector('input[name="phone"]').value;
      const password = document.querySelector('input[name="password"]').value;
  
      if (!validatePhoneNumber(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault();
      } else if (!validatePassword(password)) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
      }
    });
  }
  
  const loginForm = document.querySelector('form[action="/login"]');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      const phone = document.querySelector('input[name="phone"]').value;
      const password = document.querySelector('input[name="password"]').value;
  
      if (!validatePhoneNumber(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault();
      } else if (!validatePassword(password)) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
      }
    });
  }
  