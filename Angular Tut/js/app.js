var angularApp = angular.module('angularExample',[]);

angularApp.controller('calcCtrl', function calcCtrl($scope){

	$scope.result='';
	console.log("inside controller");

	$scope.calc = function(){
		console.log("inside calc");
		$scope.result = $scope.inp1 * $scope.inp2;
	}

});