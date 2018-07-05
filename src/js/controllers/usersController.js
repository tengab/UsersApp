usersApp.controller('usersController', ['$scope', '$http', '$stateParams', 'passingUserService', 'idService', function ($scope, $http, $stateParams, passingUserService, idService) { // eslint-disable-line

    
    
    
    $scope.cellClicked = (row, col) => {
        console.log('userDataObject', row.entity.id);
    };
    
    $scope.passingUserService = passingUserService.userArray;

    $scope.passingUserService.then((data) => {
        $scope.gridOptions = {
            data
        };
    });

    $scope.gridOptions = idService.gridUpdate
}]);