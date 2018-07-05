usersApp.controller('userDetailsController', ['$scope', '$http', '$stateParams', 'passingUserService', 'idService', function ($scope, $http, $stateParams, passingUserService, idService) { // eslint-disable-line

    console.log('stateParams', $stateParams.id)
    

    $http({
        method: 'GET',
        url: `https://randomuser.me/api/?nat=US&id=${$stateParams.id}`
    }).then((data) => {
        // console.log('USEROBJECT', data.data.results[0]);

        $scope.fetchedUser = data.data.results[0]
        console.log('fetchedUser', $scope.fetchedUser)
        console.log('lat',$scope.fetchedUser.location.coordinates.latitude)
        $scope.lat = $scope.fetchedUser.location.coordinates.latitude
        $scope.lng = $scope.fetchedUser.location.coordinates.longitude
    
    })
}]);