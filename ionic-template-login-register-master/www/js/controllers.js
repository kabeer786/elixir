angular.module('app.controllers', ['ui.router','ionic'])
  
.controller('profileCtrl', function($scope, $ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};
})
   
.controller('loginCtrl', function($scope, $rootScope, $state, AuthService,$ionicPopup, $timeout) {

	$scope.email="";
	$scope.password="";

	ionic.Platform.ready(function(){

  	});

	  $scope.showAlert = function(title,msg) {
		var alertPopup = $ionicPopup.alert({
		  title: title,
		  template: msg
		});
	 
		alertPopup.then(function(res) {
		  console.log('Thank you for not eating my delicious ice cream cone');
		});
	  };
	 
  	$scope.login = function() {
 
	  if($scope.email=='' || $scope.password==''){
		$scope.showAlert("login failed","please enter valid  credentials");
	  }
	  else{
		console.info('Authentication...');
		AuthService.login('"'+$scope.email+'"',$scope.password)
	  .then(function(resp) {
		  console.info('posts...',resp);
		  if(resp.isvalid=="false"){
			  $scope.showAlert("login failed","invalid credentials ..please try again");
		  }
		  else{
			$scope.showAlert("welcome"," logged in successfully");
			  $state.go('settings');
		  }
 

	  }); 
	  }
  		
	 
 
  		
  	}
	
})
   
.controller('registerCtrl', function($scope, $rootScope, $state, AuthService,$ionicPopup, $timeout) {


	$scope.email="";
	$scope.password="";
	$scope.username=''
	$scope.DOB=null;
	$scope.mobile=null;
	$scope.address='';
	
	$scope.showAlert = function(title,msg) {
		var alertPopup = $ionicPopup.alert({
		  title: title,
		  template: msg
		});
	 
		alertPopup.then(function(res) {
		  console.log('Thank you for not eating my delicious ice cream cone');
		});
	  };
	$scope.register = function() {
	//	alert("reg called")
			 if(	$scope.DOB==null ||$scope.email=='' || $scope.password=='' ||	$scope.username=='' || 	$scope.mobile==null||	$scope.address==''){
			 $scope.showAlert(" please fill all required Datas");
			 }
			 else{
			 console.info('Authentication...');
			 AuthService.register('"'+$scope.email+'"',$scope.password,	$scope.username,$scope.DOB,	$scope.mobile,$scope.address)
			 .then(function(resp) {
				 console.info('posts...',resp);
				 if(resp.isvalid=="false"){
					 $scope.showAlert("registered successfully","thank you for registering,kindly click on activation code and then login");
					 $state.go('login');
				 }
				 else{
			//	 $scope.showAlert("welcome"," logged in successfully");
			$scope.showAlert("registered successfully","thank you for registering,kindly click on activation code and then login");
				 $state.go('login');
				 }
		
	 
			 }); 
			 }
				 
			
		
				 
			 }



})

.controller('settingsCtrl', function($scope) {

})

.controller('splashCtrl', function($scope, $state) {
	setTimeout(function() {
		$state.go('login');
	}, 2000);
})

.controller('tilesCtrl', function($scope) {

})
 