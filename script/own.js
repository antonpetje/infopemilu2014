var QueryString = function () {
		// This function is anonymous, is executed immediately and 
		// the return value is assigned to QueryString!
		var query_string = {};
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			// If first entry with this name
			if (typeof query_string[pair[0]] === "undefined") {
				query_string[pair[0]] = pair[1];
				// If second entry with this name
			} else if (typeof query_string[pair[0]] === "string") {
				var arr = [ query_string[pair[0]], pair[1] ];
				query_string[pair[0]] = arr;
				// If third or later entry with this name
			} else {
				query_string[pair[0]].push(pair[1]);
			}
		} 
			return query_string;
	} ();

$( "a" ).on( "click", function( event ) {

	// Prevent the usual navigation behavior
	event.preventDefault();

	// Alter the url according to the anchor's href attribute, and
	// store the data-foo attribute information with the url
	$.mobile.navigate( $(this).attr( "href" ), {
		foo: $(this).attr("data-foo")
	});

	// Hypothetical content alteration based on the url. E.g, make
	// an Ajax request for JSON data and render a template into the page.
	alterContent( $(this).attr("href") );
});


var JK=new Array();
JK['P']="Perempuan";      
JK['L']="Laki-Laki";

var LP=new Array();
LP['DPR']="DPR";      
LP['DPRDI']="DPRD I";
LP['DPRDII']="DPRD II";
LP['DPD']="DPD";



  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48514939-1', 'info-pemilu2014.com');
  ga('send', 'pageview');

