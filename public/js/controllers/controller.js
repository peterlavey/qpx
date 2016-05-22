angular.module('FenrirCtrl', [])
.controller('MainCtrl', ['$scope', 'MainService', ($scope, MainService)=> {
	$scope.logo="img/logo.png";
	$scope.name="Fenrir";
	$scope.req={
	  "request": {
	    "slice": [
	      {
	        "origin": "BOS",
	        "destination": "LAX",
	        "date": "2016-09-13"
	      }
	    ],
	    "passengers": {
	      "adultCount": 1,
	      "infantInLapCount": 0,
	      "infantInSeatCount": 0,
	      "childCount": 0,
	      "seniorCount": 0
	    },
	    "solutions": 20,
	    "refundable": false
	  }
	};
	$scope.trips;
	$scope.trip;
	$scope.getTrips=(req)=>{
		MainService.getTrips(req).success((data)=>{
			$scope.trips=data;
			console.log(data.trips.tripOption[0]);
		}).error((error)=>{
			console.error(error);
		});
	};
	$scope.getDummy=()=>MainService.getDummy().success((data)=>{
		$scope.trips=data;
		console.info(data);

		$('.btn-secondary').tooltip();
	});
	$scope.getDummy();
	//$scope.getTrips($scope.req);
}])
.controller('DetailCtrl', ['$scope', '$stateParams', ($scope, $stateParams)=> {
	$scope.test="detail!!!";
	$scope.trip=$scope.trips.trips.tripOption[$stateParams.tripID];
}]);
