function startSlide(t){
    var images = [
        "images/img1.jpg",
        "images/img2.jpg",
        "images/img3.jpg",
        "images/img4.jpg",
        "images/img5.jpg",
        "images/img6.jpg",
        "images/img7.jpg",
        "images/img8.jpg",
        "images/img9.jpg",
        "images/img10.jpg",
    ]
    var slide = 0;
    setInterval(nextSlide, t*1000);

    function nextSlide()
    {
       
        slide += 1;
        document.getElementsByTagName('img')[0].setAttribute("src", images[slide]);
    }
}

function addnum (a,b){
    document.getElementById('answer').value = parseFloat(a) + parseFloat(b);
}

function subnum (a,b){
    document.getElementById('answer').value = parseFloat(a) - parseFloat(b);
}
function mulnum (a,b){
    document.getElementById('answer').value = parseFloat(a) * parseFloat(b);
}
function divnum (a,b){
    document.getElementById('answer').value = parseFloat(a) / parseFloat(b);
}

function validate(mail){ 
    var rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 if (rex.test(mail))
  {
    document.getElementById('email').style.backgroundColor = "rgba(0,255,0,0.2)";
  } else{
    document.getElementById('email').style.backgroundColor = "rgba(255,0,0,0.2)";

  }

}