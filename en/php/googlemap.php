
				<!-- Google Maps API key -->
				<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDx_4XJA3ZlhNtV0UcVocyQSVi3zI77ys&amp;sensor=false"></script>

				<!-- Options for the map displayed -->
				<script type="text/javascript">
					var myCenter = new google.maps.LatLng(49.016103, 2.076475);

					function initialize() {
					    var mapProp = {
					        center: myCenter,
					        zoom: 6,
					        disableDefaultUI: true,
					        mapTypeId: google.maps.MapTypeId.ROADMAP
					    };
					    var map = new google.maps.Map(document.getElementById("map"), mapProp);
					    var marker = new google.maps.Marker({
					        position: myCenter,
					        icon: '/assets/img/maps/pin.png'
					    });
					    marker.setMap(map);
					}
					google.maps.event.addDomListener(window, 'load', initialize);
				</script>

				<div id="map" style=height:500px;></div> <!-- this is the actual map -->