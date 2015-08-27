$(function () {
  // Turn cacheing off for ajax
  $.ajaxSetup({
    cache: false
  });

  // On refresh reload the current page
  $(function () {
    $(window).trigger('hashchange');
  })

	$(window).on('hashchange', function(){
		// On every hash change the render function is called with the new hash.
		// This is how the navigation of our app happens.
		render(window.location.hash);
	});

/*********************************************
* Render
// This function decides what type of page to show
// depending on the current url hash value.
*********************************************/
	function render(url) {
    // Get the keyword from the url.
		var temp = url.split('/')[1];
    console.log(temp);

		var map = {

			// The Homepage.
			'': function() {
        //render the home page
        $("#render").load("/views/home.html");
			},
			// Single Products page.
			'about': function() {
        $("#render").load("/views/about.html");
			},
      //Bubble page
      'contact': function() {
        $("#render").load("/views/contact.html");
      }

		};

		// Execute the needed function depending on the url keyword (stored in temp).
		if(map[temp]){
			map[temp]();
		}
		// If the keyword isn't listed in the above - render the error page.
		else {
		    $("#render").load("/views/home.html");
		}
	}

	function renderErrorPage(){
		// Shows the error page.
	}

});
