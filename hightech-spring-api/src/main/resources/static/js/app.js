var appCliente = angular.module('appCliente', []);

appCliente.controller('indexController', function($scope, $http){
	$scope.clientes = [];
	$scope.cliente = {};
	
	$scope.carregarClientes = function(){
		$http({method:'GET', url:'http://localhost:8087/clientes'})
		.then(function(response){			
			$scope.clientes = response.data;
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
	}
	
	$scope.salvarClientes = function(){
		$http({method:'POST', url:'http://localhost:8087/clientes', data:$scope.cliente})
		.then(function(response){			
			$scope.clientes.push(response.data);
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
	}
	
	$scope.excluirClientes = function(cliente){
		$http({method:'DELETE', url:'http://localhost:8087/clientes/' + cliente.id})
		.then(function(response){			
			var posicao = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(posicao, 1);			
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
	}
	
	$scope.carregarClientes();
	
});