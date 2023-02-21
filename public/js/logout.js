const logout = async function () {
    const response = await fetch("/api/user/logout", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert("You were not logged out");
      }

};

document.querySelector('#logout').addEventListener('click', logout);