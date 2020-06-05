

let httpRequest = new XMLHttpRequest();



httpRequest.onreadystatechange=function(event){
    if (event.target.readyState == XMLHttpRequest.DONE && event.target.status == 200) { 
        console.log(event.target.response);

    }

    console.log(httpRequest);
    var url = "https://www.googleapis.com/books/v1/volumes?q=name:iran";
    httpRequest.open("GET", url);
    httpRequest.send();
}