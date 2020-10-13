const submit = document.getElementById('submit-btn');
const email = document.getElementById('email');
const password = document.getElementById('password');
submit.addEventListener('click', async () => {
    const data = { email: email.value, password: password.value };
    const res = await fetch('http://localhost:3000/api/user/login', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    const resData = await res.text();
    if (res.status === 200) {
        localStorage.setItem('token', resData);
        location.replace('/importantPage.html');
        return;
    }
    alert(resData);
})