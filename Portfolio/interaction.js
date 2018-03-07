var documentHeight, scrollPercent;

var updateScroll = function(event) {
    documentHeight = document.body.scrollHeight - innerHeight; // innerHeight is the height of the window.
    scrollPercent = (pageYOffset / documentHeight) * 100;

    var trump = document.getElementById('trump');
    var trumpoffset = trump.offsetTop - innerHeight-65;
    if (pageYOffset > trumpoffset) {
  trump.setAttribute("class", "left-visible");
    }
		var march = document.getElementById('march');
		var marchoffset = march.offsetTop - innerHeight-65;
		if (pageYOffset > marchoffset) {
march.setAttribute("class", "right-visible");
		}

    var warren = document.getElementById('warren');
		var warrenoffset = warren.offsetTop - innerHeight-550;
		if (pageYOffset > warrenoffset) {
warren.setAttribute("class", "left-visible");
		}
    var fowler = document.getElementById('fowler');
		var fowleroffset = fowler.offsetTop - innerHeight-65;
		if (pageYOffset > fowleroffset) {
fowler.setAttribute("class", "right-visible");
		}
    var google = document.getElementById('google');
		var googleoffset = google.offsetTop - innerHeight-65;
		if (pageYOffset > googleoffset) {
google.setAttribute("class", "left-visible");
		}
    var metoo = document.getElementById('metoo');
    var metoooffset = metoo.offsetTop - innerHeight-65;
    if (pageYOffset > metoooffset) {
metoo.setAttribute("class", "right-visible");
    }
    var timesup = document.getElementById('timesup');
    var timesupoffset = timesup.offsetTop - innerHeight-65;
    if (pageYOffset > timesupoffset) {
timesup.setAttribute("class", "left-visible");
    }
}

addEventListener("scroll", updateScroll);
