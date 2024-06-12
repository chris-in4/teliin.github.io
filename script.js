/*toggle between adding and removing the "responsive" class to topnav when the user click on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  }  else{
    x.className = "topnav";
  }
}

/*preload script*/
var loader = document.getElementById("pre-loader");

      window.addEventListener("load", function () {
        setTimeout( function () {
            loader.style.display = "none"
        }, 8500);
      });

/*slider script code*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 9000000000); // Change image every 2 seconds
}

// Read more script starts here welcome statement

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
//Read more script ends here welcome statement

// read more script start here for our mission
function myFunction1() {
  var dots1 = document.getElementById("dots1");
  var more1Text = document.getElementById("more1");
  var btn1Text = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btn1Text.innerHTML = "Read more";
    more1Text.style.display = "none";
  } else {
    dots1.style.display = "none";
    btn1Text.innerHTML = "Read less";
    more1Text.style.display = "inline";
  }
}
// read more script ends here for our mission

// read more script starts here for our vission
function myFunction2() {
  var dots2 = document.getElementById("dots2");
  var more2Text = document.getElementById("more2");
  var btn2Text = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btn2Text.innerHTML = "Read more";
    more2Text.style.display = "none";
  } else {
    dots2.style.display = "none";
    btn2Text.innerHTML = "Read less";
    more2Text.style.display = "inline";
  }
}
// read more script ends here for our vission

// read more script starts here for our goals
function myFunction3() {
  var dots3 = document.getElementById("dots3");
  var more3Text = document.getElementById("more3");
  var btn3Text = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btn3Text.innerHTML = "Read more";
    more3Text.style.display = "none";
  } else {
    dots3.style.display = "none";
    btn3Text.innerHTML = "Read less";
    more3Text.style.display = "inline";
  }
}
// read more script ends here for our goals

//################### Our team script starts here ####################

//################## Our team Script ends here ####################### 