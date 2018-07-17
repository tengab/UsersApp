usersApp.controller('userDetailsController', ['$scope', '$rootScope', '$http', '$stateParams', 'APIService', function($scope, $rootScope, $http, $stateParams, APIService) { // eslint-disable-line prefer-arrow-callback, no-undef


    const fullUsersData = APIService.usersFromApi.concat(APIService.usersAddedManually);

    for (let i = 0; i < fullUsersData.length; i++) {
        if (fullUsersData[i].id === $stateParams.id) {
            $scope.fetchedUser = fullUsersData[i];
        }
    }

    $scope.lat = $scope.fetchedUser.location.coordinates.latitude;
    $scope.lng = $scope.fetchedUser.location.coordinates.longitude;

    if (($scope.lat && $scope.lng) !== 'noData') {
        $scope.isMapAvailable = true;
    }

}]);