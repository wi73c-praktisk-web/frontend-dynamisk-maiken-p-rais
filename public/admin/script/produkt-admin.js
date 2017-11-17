function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// slet funktionen, bindes til hver slet knap efter alle produkterne er hentet
function sletItem(event) {
    if (confirm('Er du sikker?')) {
        let id = (isNaN(event.target.dataset['id']) ? 0 : event.target.dataset['id']);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let init = {
            method: 'delete',
            headers: headers,
            cache: 'no-cache'
        };
        let request = new Request(`http://localhost:1337/produkt/${id}`, init);

        fetch(request)
            .then(response => {
                if (response.status == 204) {
                    window.location.replace('/admin/produkt-admin.html');
                } else {
                    throw new Error('Produkt blev ikke slettet');
                }
            }).catch(err => {
                console.log(err);
            });
    }
}

function hentProdukter() {
    // console.log('pølse')
    // alert(id);
    var url = 'http://localhost:1337/produkter';

    fetch(url)
        .then((response) => {
            // console.log('hej verden');
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);

            let liste = `
            <h2>Eksisterende Produkter</h2>
            <table class="table table-inverse">
               <tr>
                  <th></th>
                  <th></th>
                  <th>ID</th>
                  <th>Navn</th>
                  <th>Varenr</th>
                  <th>Pris</th>
               </tr>`

            for (let i = 0; i < data.length; i++) {

                liste += `<tr>
                
                <td> <a href="?action=edit&id=${data[i].id}" class="retButton">Ret</a> </td>
                <td> <button class="sletButton" data-id="${data[i].id}">Slet</button></td>
                <td scope="row">${data[i].id}</td>
                <td>${data[i].navn}</td>
                <td>${data[i].varenr}</td>
                <td>${data[i].pris}</td>
              </tr>`;
            }
            liste += `</table><hr>`;

            document.getElementById('produktliste').innerHTML = liste;

            let deleteButtons = document.querySelectorAll('#produktliste button.sletButton');
            deleteButtons.forEach((button) => {
                button.addEventListener('click', sletItem);
            })
        })
        .catch((err) => {
            console.log(err);
        })

}

document.addEventListener("DOMContentLoaded", event => {

    if (getParameterByName('action') == "edit") {
        let id = (getParameterByName('id') != null ? getParameterByName('id') : 0);

        fetch(`http://localhost:1337/produkter/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((json) => {

                // erstat punktum med komma
                let pris = json[0].pris;
                pris = pris.replace('.', ',');

                document.querySelector('#navn').value = json[0].navn;
                document.querySelector('#varenr').value = json[0].varenr;
                document.querySelector('#beskrivelse').value = json[0].beskrivelse;
                document.querySelector('#pris').value = json[0].pris;
                document.querySelector('#kategori').value = json[0].fk_kategori;
                document.querySelector('#producent').value = json[0].fk_producent;

                console.log('rediger')

                let productFormButton = document.querySelector("#gem");

                productFormButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    let navn = document.querySelector('#navn').value;
                    let varenr = document.querySelector('#varenr').value;
                    let beskrivelse = document.querySelector('#beskrivelse').value;
                    let pris = document.querySelector('#pris').value;
                    let kategori = document.querySelector('#kategori').value;
                    let producent = document.querySelector('#producent').value;
                    let id = (getParameterByName('id') != null ? getParameterByName('id') : 0);

                    // erstat komma med punkt, så isNaN funktionen fungerer hensigtsmæssigt
                    pris = pris.replace(',', '.');

                    if (navn != '' && varenr != '' && beskrivelse != '' && !isNaN(pris) && kategori != '' && producent != '' && id > 0) {
                        document.querySelector('#udfyldningMangler').innerHTML = "";
                        let url = `http://localhost:1337/produkter/${id}`;
                        let headers = new Headers();
                        headers.append('Content-Type', 'application/json');

                        let init = {
                            method: 'put',
                            headers: headers,
                            body: JSON.stringify({
                                navn: navn,
                                varenr: varenr,
                                beskrivelse: beskrivelse,
                                pris: pris,
                                kategori: kategori,
                                producent: producent
                            }),
                            cache: 'no-cache',
                            cors: 'cors'
                        };
                        let request = new Request(url, init);

                        fetch(request)
                            .then(response => {

                                if (response.status == 200) {
                                    window.location.replace(`/admin/produkt-admin.html`);
                                } else {
                                    throw new Error('Produkt blev ikke opdateret')
                                }
                            }).catch(err => {
                                console.log(err);
                            });

                    } else {
                        document.querySelector('#udfyldningMangler').innerHTML = "Udfyld venligst alle felter korrekt";
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    
    } else {
    console.log('svend')
    // Lytter på om der er klikket på knappen gem - herefter postes data som indsættes i databasen
    document.querySelector('#gem').addEventListener('click', (event) => {
        console.log('event ok');
        event.preventDefault();
        let navn = document.querySelector('#navn').value;
        let varenr = document.querySelector('#varenr').value;
        let beskrivelse = document.querySelector('#beskrivelse').value;
        let pris = document.querySelector('#pris').value;
        let kategori = document.querySelector('#kategori').value;
        let producent = document.querySelector('#producent').value;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let init = {
            method: 'POST',
            headers: headers,
            body: `{"navn":"${navn}","varenr":"${varenr}","beskrivelse":"${beskrivelse}","pris":"${pris}", 
        "kategori":"${kategori}", "producent":"${producent}" }`,
            cache: 'no-cache',
            mode: 'cors'
        };

        let request = new Request('http://localhost:1337/produkt', init);

        fetch(request)
            .then(response => { console.log(response) }).catch(err => { console.log(err) });

    });
}

hentProdukter()

})

