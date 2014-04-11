window.onload = function() {

	var prod_img = document.getElementById("prod_img");

	// Set an interval o keep rotating the image every 256 milliseconds
	setInterval(function(){
		prod_img.src = getImageSrc();
	},1000);


	var imgIndex = 1;
	function getImageSrc() {
		imgIndex = (imgIndex + 1) > 5? 1 : imgIndex + 1;
		return imgIndex + ".jpeg";
	}




	var home = document.getElementById("pic");
	var details = document.getElementById("inf");
	var review = document.getElementById("rev");

	document.getElementById("home").onclick = function() {
		home.style.display = "block";
		details.style.display = "none";
		review.style.display = "none";
	}

	document.getElementById("details").onclick = function() {
		home.style.display = "none";
		details.style.display = "block";
		review.style.display = "none";
	}

	document.getElementById("review").onclick = function() {
		home.style.display = "none";
		details.style.display = "none";
		review.style.display = "block";
	}



}