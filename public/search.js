function search(){
    var value = document.getElementById("search").value;
    window.location.assign("produkter.html?search=" + value);
}

document.getElementById("searchForm").addEventListener('submit', function (event){
    event.preventDefault();
    search();
});