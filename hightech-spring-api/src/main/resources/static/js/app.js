var appCliente = angular.module('appCliente', []);

appCliente.controller('indexController', function($scope, $http){
	$scope.nome = 'JKAVDEV';
	$scope.clientes = [];
	
	$http({method:'GET', url:'http://localhost:8087/clientes'})
		.then(function(response){
			console.log(response.data);
			console.log(response.status);
			
			$scope.clientes = response.data;
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
});