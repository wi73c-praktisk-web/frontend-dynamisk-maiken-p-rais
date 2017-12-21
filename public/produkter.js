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

            document.getElementById('produkter').innerHTML += '<h2>produkterx</h2>'
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

function hentProdukterByKategori(kategoriId) {
    // console.log(kategoriId)
    // console.log('pølse')
    // alert('test');

    fetch('http://localhost:1337/kategorier/' + kategoriId)
        .then((response) => {
            // console.log('hej verden');
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            document.getElementById('titel').innerHTML = data[0].navn;
        });


    fetch('http://localhost:1337/produkter/kategori/' + kategoriId)
        .then((response) => {
            // console.log('hej verden');
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);

            // var antal = data.length;
            // console.log(antal);
            // if (antal > 0) {
            //     console.log("minimum 1 produkt");
            //     console.log(data[0].);
            // } else{
            //     console.log("ingen produkter");
            // }
            // document.getElementById('produkter').innerHTML += '<h2>produkter2</h2>'
            data.forEach(function (element) {

                // document.getElementById('produkter').innerHTML += `
                // <section onclick="hentSpecifiktProdukt(${element.id})" class="celle col-sm-4 demo-content inner-section">
                // <p>${element.navn}</p>
                // <img src="Produktbilleder/${element.img}" alt="">                            

                // </section>`;

                document.getElementById('produkter').innerHTML += `
            
            <section onclicsk="window.location.replace('http://localhost:3000/produkter.html?kategori=${kategoriId}&produkt=${element.id}')" class="celle col-sm-4 demo-content inner-section">
            <a style="display: block" href="http://localhost:3000/produkter.html?kategori=${kategoriId}&produkt=${element.id}">
            <p>${element.navn}</p>
            <img src="Produktbilleder/${element.img}" alt="">        
            </a></section>`;
                // <a href="http://localhost:3000/produkter.html?kategori=${kategoriId}&produkt=${element.id}">Mere</a>                         
            }, this);
        })
}

//==========================================

function showSearch(search, kategoriId) {
    // console.log(kategoriId)
    // alert('test');
    fetch('http://localhost:1337/produkter/search/' + search)
        .then((response) => {
            // console.log('hej verden');
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);

            // var antal = data.length;
            // console.log(antal);
            // if (antal > 0) {
            //     console.log("minimum 1 produkt");
            //     console.log(data[0].);
            // } else{
            //     console.log("ingen produkter");
            // }
            // document.getElementById('produkter').innerHTML += '<h2>produkter2</h2>'
            data.forEach(function (element) {
                document.getElementById('produkter').innerHTML += `
            <section onclick="hentSpecifiktProdukt(${element.id})" class="celle col-sm-4 demo-content inner-section">
            <a style="display: block" href="http://localhost:3000/produkter.html?produkt=${element.id}">
            <p>${element.navn}</p>
            <img src="Produktbilleder/${element.img}" alt="">                            
             </a>               
            </section>`;
            }, this);
        })
}

//==========================================

var parseQueryString = function (url) {
    var urlParams = {};
    url = url + "";
    url.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function ($0, $1, $2, $3) {
            urlParams[$1] = $3;
        }
    );

    return urlParams;
}

//=====================================


function hentEnkeltProdukt(id) {
    // console.log('pølse')
    // alert(id);
    var url = 'http://localhost:1337/produkter';
    if (id) {
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

            document.getElementById('content').innerHTML += '<a href="http://localhost:3000/index.html" >Tilbage</a>'
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


function hentSpecifiktProdukt(id) {
    // console.log('pølse')
    // alert(id);
    var url = 'http://localhost:1337/produkter';
    if (id) {
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

            // var urlParameter = parseQueryString(window.location);

            // var minOnclick = `window.location.replace('http://localhost:3000/produkter.html?kategori=${urlParameter.kategori}')`
            // document.getElementById('produkter').innerHTML += `<a href="#" onclick="${minOnclick}"> Tilbage</a>`

            //document.getElementById('produkter').innerHTML += `<a href="http://localhost:3000/produkter.html?kategori=${urlParameter.kategori}"> Tilbage</a>`

            var minOnclick = `window.history.go(-1)`
            document.getElementById('produkter').innerHTML += `<a href="#" onclick="${minOnclick}">Tilbage</a>`

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


var urlParameter = parseQueryString(window.location);
// console.log(urlParameter.kategori);
if (urlParameter.search != null) {
    showSearch(urlParameter.search);
    
}
else if (urlParameter.produkt != null) {
    // console.log(urlParameter.produkt)
    hentSpecifiktProdukt(urlParameter.produkt);
}
else if (urlParameter.kategori != null) {
    hentProdukterByKategori(urlParameter.kategori)
}

else {
    console.log("Her udskrives alle produkter, hvis der ikke findes kategori id eller produkt id");
    var currentPathname = window.location.pathname;
    if (currentPathname != "/index.html") {
        hentProdukter()
    }

}