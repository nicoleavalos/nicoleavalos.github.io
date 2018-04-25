
/* automatic image rotation
–––––––––––––––––––––––––––––––––––––––––––––––––– */

var imageSources = ["resistance.jpeg", "glass.jpeg", "womensrights.jpg", "boss.JPG"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  index++;
} , 3000);



/* timeline events will pop up when user scrolls
–––––––––––––––––––––––––––––––––––––––––––––––––– */

  var documentHeight, scrollPercent;

  var updateScroll = function(event) {
      documentHeight = document.body.scrollHeight - innerHeight; // innerHeight is the height of the window.
      scrollPercent = (pageYOffset / documentHeight) * 100;

      var trump = document.getElementById('trump');
      var trumpoffset = trump.offsetTop - innerHeight;
      if (pageYOffset > trumpoffset) {
    trump.setAttribute("class", "left-visible");
      }
  		var march = document.getElementById('march');
  		var marchoffset = march.offsetTop - innerHeight;
  		if (pageYOffset > marchoffset) {
  march.setAttribute("class", "right-visible");
  		}

      var warren = document.getElementById('warren');
  		var warrenoffset = warren.offsetTop - innerHeight;
  		if (pageYOffset > warrenoffset) {
  warren.setAttribute("class", "left-visible");
  		}
      var fowler = document.getElementById('fowler');
  		var fowleroffset = fowler.offsetTop - innerHeight;
  		if (pageYOffset > fowleroffset) {
  fowler.setAttribute("class", "right-visible");
  		}
      var google = document.getElementById('google');
  		var googleoffset = google.offsetTop - innerHeight;
  		if (pageYOffset > googleoffset) {
  google.setAttribute("class", "left-visible");
  		}
      var metoo = document.getElementById('metoo');
      var metoooffset = metoo.offsetTop - innerHeight;
      if (pageYOffset > metoooffset) {
  metoo.setAttribute("class", "right-visible");
      }
      var timesup = document.getElementById('timesup');
      var timesupoffset = timesup.offsetTop - innerHeight;
      if (pageYOffset > timesupoffset) {
  timesup.setAttribute("class", "left-visible");
      }

  }

  addEventListener("scroll", updateScroll);

  /* Video will play when user scrolls
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  var video = document.getElementById('video1'), fraction = 0.8;

             function checkScroll() {
                 var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
                 b = y + h, //bottom
                 visibleX, visibleY, visible;

                 visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
                 visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

                 visible = visibleX * visibleY / (w * h);

                 if (visible > fraction) {
                     video.play();
                 } else {
                     video.pause();
                 }
             }

             checkScroll();
             window.addEventListener('scroll', checkScroll, false);
             window.addEventListener('resize', checkScroll, false);


/* Slideshow
–––––––––––––––––––––––––––––––––––––––––––––––––– */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
