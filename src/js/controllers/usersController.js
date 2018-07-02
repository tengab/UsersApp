var usersApp = angular.module('usersApp')


usersApp.controller('usersController', ['$scope', '$http', function ($scope, $http) {
    $scope.message = 'Hello Users!'

    $scope.users = []

    $http({
        method: 'GET',
        url: 'https://randomuser.me/api/?results=5'
     }).then(function (response){
        console.log(response.data.results)
        $scope.users = response.data.results
     },function (error){
        console.log('data ' + data)
        console.log('status ' + status)
     });

}
])

usersApp.controller('usersDetailsController', ['$scope', function ($scope) {
    $scope.message = 'Hello User detail!'
}
])