angular.module('FenrirCtrl', [])
.controller('MainCtrl', ['$scope','$http', 'MainService', ($scope, $http, MainService)=> {
	$scope.test="asd";
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
	$scope.getTrips=(req)=>{
		MainService.getTrips(req).success((data)=>{
			$scope.trips=data;
		}).error((error)=>{
			console.error(error);
		});
	};
	$scope.getTrips($scope.req);
}]);
