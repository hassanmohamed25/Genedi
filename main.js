const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

//-----bro----//

var minImg = document.getElementById("minImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    minImg.src = smallImg[0].src;
};

smallImg[1].onclick = function () {
    minImg.src = smallImg[1].src;
};

smallImg[2].onclick = function () {
    minImg.src = smallImg[2].src;
};

smallImg[3].onclick = function () {
    minImg.src = smallImg[3].src;
};

/*
fetch ("https://www.breakingbadapi.com/api/")
.then(function(response){
    return response.json();
    console.log(response);
})
.then(function(data){
    console.log(data)
})

*/
