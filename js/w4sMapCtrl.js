
var w4sController = angular.module('w4sMapCtrl',['ngtweet']);

w4sController.controller('W4sMapCtrl',['GetParis','sharedProperties',function(GetParis,sharedProperties){
	var vm = this;
	vm.gp = GetParis.list(function(GetParis){
		vm.getparis = GetParis;
		vm.bindCities(vm.getparis.list)
	});

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);

	}
	function showPosition(position) {
    vm.visitorLatitude = position.coords.latitude;
    vm.visitorLongitude = position.coords.longitude; 
	}

	vm.bindCities = function(list) {

		var frmap = L.map('mapid').setView([46.805, 1.09], 5.5);
		L.tileLayer('https://api.mapbox.com/styles/v1/gwengpn/citqbd1so00002imfcx9lulhz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3dlbmdwbiIsImEiOiJjaXRxYjd1cHkwMDA3Mm9xd2NhaHNzczkxIn0.0yR2mVXQIEIG4ybr-vuI3Q', {
	    maxZoom: 6,
	    minZoom: 6,
	    accessToken: 'pk.eyJ1IjoiZ3dlbmdwbiIsImEiOiJjaXRxYjd1cHkwMDA3Mm9xd2NhaHNzczkxIn0.0yR2mVXQIEIG4ybr-vuI3Q'
		}).addTo(frmap);

		var WeatherIcon = L.Icon.extend({
		    options: {
		        iconSize:     [85, 85],
		        iconAnchor:   [30, 44],
		        popupAnchor:  [0,0]
		    }
		});
		for(i in list){
			current = list[i];
			L.marker([current.coord.lat, current.coord.lon], {icon: new WeatherIcon({iconUrl: 'http://openweathermap.org/img/w/'+current.weather[0].icon+'.png',className:'current&'+i})})
			.on('click', function (e) {

			    var cl = this._icon.className;
			    var id = Number(cl.substring(cl.indexOf("&")+1,cl.indexOf("&")+3));
			    vm.weatherInfo = vm.getparis.list[id];
			    sharedProperties.setProperty(vm.weatherInfo);
			    document.location.href = '#/more';

			})
			.addTo(frmap);
		}
	}
}])

