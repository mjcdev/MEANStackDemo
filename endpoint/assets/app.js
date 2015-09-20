var app = angular.module('app', [])
			app.controller('PostsCtrl', function($scope, $http) {
				
				$http.get('http://localhost:3000/api/posts')
					.success(function(posts) {
						$scope.posts = posts
					})
				
				$scope.addPost = function () {					
					if($scope.postBody)
					{
						$http.post('/api/posts', {
							username: 'mjcdev',
							body: $scop.postBody
						}).success(function (post) {
							$scope.posts.unshift(post)
							$scope.postBody = null
						})					
					}
				}
			})			