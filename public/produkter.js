// function afspillere(){
//     // alert('test');
// fetch('http://localhost:1337/afspillere')
//     .then((response) => {
//         // console.log('hej verden');
//         // grib svarets indhold (body) og send det som et json objekt til næste .then()
//         return response.json();
//     })
//     .then((data) => {
//         // nu er json objektet lagt ind i data variablen, udskriv data
//         console.log(data);

//         document.getElementById('afspillere').innerHTML += '<h2>Afspillere</h2>'
//         data.forEach(function (element) {
//             document.getElementById('afspillere').innerHTML += `
//             <section class="celle col-sm-4 demo-content inner-section">
//             <p>${element.navn}</p>
//             <img src="Produktbilleder/${element.img}" alt="">                            
//             <p>${element.varenr}</p>                            
//             <p>${element.pris}</p>
//             </section>`;
//         }, this);
//     })
// }

//=============================================

function hentProdukter(){
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

        document.getElementById('produkter').innerHTML += '<h2>produkter</h2>'
        data.forEach(function (element) {
            document.getElementById('produkter').innerHTML += `
            <section class="celle col-sm-4 demo-content inner-section">
            <p>${element.navn}</p>
            <img src="Produktbilleder/${element.img}" alt="">                            
                            
            </section>`;
        }, this);
    })
}

//=============================================
// hentProdukterByKategori(3)

function hentProdukterByKategori(kategoriId){
    console.log(kategoriId)
    // console.log('pølse')
    // alert('test');
fetch('http://localhost:1337/produkter/kategori/' + kategoriId)
    .then((response) => {
        // console.log('hej verden');
        // grib svarets indhold (body) og send det som et json objekt til næste .then()
        return response.json();
    })
    .then((data) => {
        // nu er json objektet lagt ind i data variablen, udskriv data
        console.log(data);

        document.getElementById('produkter').innerHTML += '<h2>produkter</h2>'
        data.forEach(function (element) {
            document.getElementById('produkter').innerHTML += `
            <section onclick="hentSpecifiktProdukt(${element.id})" class="celle col-sm-4 demo-content inner-section">
            <p>${element.navn}</p>
            <img src="Produktbilleder/${element.img}" alt="">                            
                            
            </section>`;
        }, this);
    })
}

//==========================================

var parseQueryString = function(url) {
    var urlParams = {};
    url = url + "";
    url.replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) {
        urlParams[$1] = $3;
      }
    );
    
    return urlParams;
  }

  //=====================================

  function hentEnkeltProdukt(id){
    // console.log('pølse')
    // alert(id);
    var url = 'http://localhost:1337/produkter';
    if (id){
        url += "/" + id;
    }
fetch(url)
    .then((response) => {
        // console.log('hej verden');
        // grib svarets indhold (body) og send det som et json objekt til næste .then()
        return response.json();
    })
    .then((data) => {
        // nu er json objektet lagt ind i data variablen, udskriv data
        console.log(data);
        document.getElementById('content').innerHTML = "";
        document.getElementById('populær').innerHTML = "";

        document.getElementById('content').innerHTML += '<h2>produkter</h2> <a href="http://localhost:3000/index.html" > Tilbage</a>' 
        data.forEach(function (element) {
            document.getElementById('content').innerHTML += `
            <section class="celle col-sm-4 demo-content inner-section">
            <p>${element.navn}</p>
            <img src="Produktbilleder/${element.img}" alt="">                            
            <p>${element.beskrivelse}</p>      
            <p>Varenr.: ${element.varenr}</p>                            
            <p>${element.pris} kr.</p>          
            </section>`;
        }, this);
    })
}

//===================================

function hentSpecifiktProdukt(id){
    // console.log('pølse')
    // alert(id);
    var url = 'http://localhost:1337/produkter';
    if (id){
        url += "/" + id;
    }
fetch(url)
    .then((response) => {
        // console.log('hej verden');
        // grib svarets indhold (body) og send det som et json objekt til næste .then()
        return response.json();
    })
    .then((data) => {
        // nu er json objektet lagt ind i data variablen, udskriv data
        console.log(data);
        document.getElementById('produkter').innerHTML = "";

        document.getElementById('produkter').innerHTML += '<h2>produkter</h2> <a href="" > Tilbage</a>' 
        data.forEach(function (element) {
            document.getElementById('produkter').innerHTML += `
            <section class="celle col-sm-4 demo-content inner-section">
            <p>${element.navn}</p>
            <img src="Produktbilleder/${element.img}" alt="">                            
            <p>${element.beskrivelse}</p>
            <p>Varenr.: ${element.varenr}</p>                            
            <p>${element.pris} kr.</p> 
            </section>`;
        }, this);
    })
}