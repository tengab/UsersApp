usersApp.controller('userDetailsController', ['$scope', '$http', '$stateParams', 'passingUserService', function($scope, $http, $stateParams, passingUserService) { // eslint-disable-line prefer-arrow-callback, no-undef

    $http({
        method: 'GET',
        url: 'https://randomuser.me/api/?results=10&nat=US&seed=a'
    }).then((response) => {
        const pointedUser = response.data.results;

        for (let i = 0; i < pointedUser.length; i++) {
            if (pointedUser[i].login.uuid === $stateParams.id) {
                $scope.fetchedUser = pointedUser[i];
            }
        }

        $scope.lat = $scope.fetchedUser.location.coordinates.latitude;
        $scope.lng = $scope.fetchedUser.location.coordinates.longitude;
    });
}]);

