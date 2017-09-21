function afspillere(){
    // alert('test');
fetch('http://localhost:1337/afspillere')
    .then((response) => {
        console.log('hej verden');
        // grib svarets indhold (body) og send det som et json objekt til næste .then()
        return response.json();
    })
    .then((data) => {
        // nu er json objektet lagt ind i data variablen, udskriv data
        console.log(data);

        document.getElementById('afspillere').innerHTML += '<h2>Afspillere</h2>'
        data.forEach(function (element) {
            document.getElementById('afspillere').innerHTML += `
            <section class="celle col-sm-4 demo-content inner-section">
            <p>${element.navn}</p>
            <img src="Produktbilleder/${element.img}" alt="">                            
                            
            </section>`;
        }, this);
    })
}