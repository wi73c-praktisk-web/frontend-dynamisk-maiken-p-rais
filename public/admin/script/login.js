(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('.loginForm');
        console.log(form);
        form.onsubmit = () => {
            console.log('test');
            const data = JSON.stringify({
                'username': form.username.value,
                'password': form.password.value
            });

            fetch('http://localhost:1337/login', {
                'method': 'POST',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                },
                'mode': 'cors',
                'cache': 'default',
                'body': data
            })
                .then((result) => result.json())
                .then((data) => {
                    localStorage.setItem('token', data.AccessToken);
                    localStorage.setItem('userid', data.ID);
                    window.location.replace("http://localhost:3000/admin/produkt-admin.html");
                    // document.getElementById('status').innerHTML = "Du er nu logget ind ...";
                })
                .catch((err) => {
                    console.log(err);
                });

            return false;
        };
    });
})();

