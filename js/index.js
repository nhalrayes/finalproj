
	$('form').submit(findCity);
	$('#LA').click(mapLa);
	$('#NY').click(mapNy);
	$('#DC').click(mapDc);
	$('#suggest').submit(processForm)

var city = [
	'LA',
	'NYC',
	'DC'];

function createImageHTML(cityName) {
	var imageHTML = '<img id="carousel" src= "images/' + cityName + '.jpg" />';
	return imageHTML;
}

var cityHTML = [];

for ( var i=0; i< city.length; i++ ) {
	
	var html = createImageHTML(city[i]);
	cityHTML.push(html);
}

var carouselIndex=0;
		$('#next').click(showNextImage);
		function showNextImage() {
			carouselIndex++;

			if (carouselIndex > cityHTML.length-1) {
				carouselIndex = 0;
			}
			var nextCityHTML = cityHTML[carouselIndex];

			$('#carousel-view').html(nextCityHTML);
		}

	$('#prev').click(showPreviousImage);
		function showPreviousImage() {
			carouselIndex--;

			if (carouselIndex < 0)  {
				carouselIndex = cityHTML.length-1;
			}

		}
			var prevCityHTML = cityHTML[carouselIndex]; 
			$('#carousel-view').html(prevCityHTML);

 function findCity (event) {
 	event.preventDefault();

 	var scity = $('#city-type')
 					.val()
 					.toLowerCase();


 	if (scity === "ny" || scity === "nyc" || scity === "new york") { 
 		console.log('ny');
 		mapNy();
 	}

 	if (scity === "la" || scity === "los angeles") {
 		console.log('la');
		mapLa();
	}

	if (scity === "dc" || scity === "washington" || scity === "washington dc") {
 		console.log('dc');
		mapDc();
 	}
 }

 function mapNy() {
 	 $('iframe').attr('src','https://www.google.com/maps/d/u/0/embed?mid=zcXF_fwcz7TM.kXbvid23SeII')

 }
 function mapLa() {
 	 $('iframe').attr('src','https://www.google.com/maps/d/u/0/embed?mid=zcXF_fwcz7TM.ktQCv3EUwBqU')

 }
 function mapDc() {
 	 $('iframe').attr('src','https://www.google.com/maps/d/u/0/embed?mid=zcXF_fwcz7TM.kI99FLHofOv8')

 }
function processForm(event) {
	event.preventDefault();
	var location= $('input[name="location"]').val();
	var comment = $('input[name="comment"]').val();
	var optcity = $('select[name="city"]').val();

	if (location === '') {
		$('#error')
			.html('Please enter a location name')
			.removeClass('hide');
	}
	else if (comment === '') {
		$('#error')
			.html('Please enter a comment or description')
			.removeClass('hide');
	}
	else if (optcity=== 'select') {
		$('#error')
			.html('Please choose a city')
			.removeClass('hide');
	}
	else {
			$('#error').addClass('hide');
			$('#success')
				.html('Thanks for the suggestion!')
				.removeClass('hide');
		}
}




