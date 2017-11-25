angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('AuthService', function($q, $http, $rootScope, $ionicLoading, ApiEndpoint){
	return {
		login : function($email, $password) {
		
			var loginurl=ApiEndpoint.url+'?name='+$email+'&pass='+$password;
		//	alert('login called'+loginurl+"email"+$email)
			var data = JSON.stringify({
					email: $email,
					password: $password
				});
			
			
			$ionicLoading.show();
 
				   // create deferred object using $q
				   var deferred = $q.defer();
				   var posts = undefined;
						  // get posts form backend
						  $http.get(loginurl)
							.then(function(result) {
							  posts = result.data;
							  // resolve the deferred
							  deferred.resolve(posts);
							}, function(error) {
								//alert("error"+JSON.stringify(error))
							  posts = error;
							  deferred.reject(error);
							});
				   
						  // set the posts object to be a promise until result comeback
						  posts = deferred.promise;
						
						  $ionicLoading.hide();
						// in any way wrap the posts object with $q.when which means:
						// local posts object could be:
						// a promise
						// a real posts data
						// both cases will be handled as promise because $q.when on real data will resolve it immediately
						return $q.when(posts);
					  
				 
		},
		register : function($email, $password) {
			
 
			//	alert('login called'+loginurl+"email"+$email)
				var data = JSON.stringify({
						email: $email,
						password: $password
					});
				console.log('regis called',data)
				
				$ionicLoading.show();
	 
						 // create deferred object using $q
						 var deferred = $q.defer();
						 var posts = undefined;
								// get posts form backend
								$http.post('http://wms.beyondsuccess.com.my/mobileapp/register.php',data)
								.then(function(result) {
									posts = result.data;
									// resolve the deferred
									deferred.resolve(posts);
								}, function(error) {
									//alert("error"+JSON.stringify(error))
									posts = error;
									deferred.reject(error);
								});
								posts = deferred.promise;
							
								$ionicLoading.hide();
 
							return $q.when(posts);
							
					 
			}
	}

	})


