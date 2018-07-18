usersApp.controller('userDetailsController', ['$scope', '$location', '$stateParams', 'APIService', function($scope, $location, $stateParams, APIService) { // eslint-disable-line prefer-arrow-callback, no-undef

    if ($stateParams.id.length === 13 && APIService.usersAddedManually.length > 0) {

        for (let i = 0; i < APIService.usersAddedManually.length; i++) {
            if (APIService.usersAddedManually[i].id === $stateParams.id) {
                $scope.fetchedUser = APIService.usersAddedManually[i];
            }
        }

        $scope.lat = $scope.fetchedUser.location.coordinates.latitude;
        $scope.lng = $scope.fetchedUser.location.coordinates.longitude;

    } else if ($stateParams.id.length === 13 && APIService.usersAddedManually.length === 0) {

        $location.path( '/' );

    } else {

        APIService.getUsersAddedManually()
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === $stateParams.id) {
                        $scope.fetchedUser = data[i];
                    }
                }
            });
    }

    if (($scope.lat && $scope.lng) !== 'noData') {
        $scope.isMapAvailable = true;
    }

}]);