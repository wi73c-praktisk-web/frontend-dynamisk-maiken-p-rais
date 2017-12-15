// Lytter på om der er klikket på knappen gem - herefter postes data som indsættes i databasen
document.querySelector('#send').addEventListener('click', (event) => {
    console.log('event ok');
    event.preventDefault();
    let fornavn = document.querySelector('#fornavn').value;
    let efternavn = document.querySelector('#efternavn').value;
    let email = document.querySelector('#email').value;
    let besked = document.querySelector('#besked').value;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let init = {
        method: 'POST',
        headers: headers,
        body: `{"fornavn":"${fornavn}","efternavn":"${efternavn}","email":"${email}","besked":"${besked}" }`,
        cache: 'no-cache',
        mode: 'cors'
    };

    let request = new Request('http://localhost:1337/kontakt', init);

    fetch(request)
        .then(response => { console.log(response) }).catch(err => { console.log(err) });
    alert("Besked sendt");
    // window.location.replace(`kontakt.html`);
});