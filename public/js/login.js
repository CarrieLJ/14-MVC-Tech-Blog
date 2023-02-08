const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const password = document.querySelector('#password-login').value.trim();
  
    if (password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  