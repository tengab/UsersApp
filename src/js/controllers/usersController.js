var usersApp = angular.module('usersApp')


usersApp.controller('usersController', ['$scope', function ($scope) {
    $scope.message = 'Hello Users!'
}
])

usersApp.controller('usersDetailsController', ['$scope', function ($scope) {
    $scope.message = 'Hello User detail!'
}
])