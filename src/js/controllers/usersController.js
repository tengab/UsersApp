usersApp.controller('usersController', ['$scope', '$http', 'passingUserService', function ($scope, $http, passingUserService) { // eslint-disable-line
    $scope.message = 'Users list';
    $scope.users = [];
    $scope.image = '';

    $scope.cellClicked = (row, col) => {
        console.log('userDataObject',row.entity);
    };

    $scope.passingUserService = passingUserService.userArray;

    $scope.passingUserService.then((data) => {
        $scope.gridOptions = {
            data
        };
    });

    $scope.gridOptions = {
        enableSorting: true,
        rowHeight: 50,
        columnDefs: [
            { field: 'thumbnail', enableSorting: false, cellClass: 'thumbnailCell', cellTemplate: '<img ng-src=\'{{grid.getCellValue(row, col)}}\'>' },
            { field: 'firstName', enableSorting: false, cellClass: 'thumbnailCell' },
            { field: 'lastName',
                enableSorting: false,
                cellClass: 'thumbnailCell',
                cellTemplate: '<div ng-click="grid.appScope.cellClicked(row,col)" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>' },
            { field: 'age', enableSorting: false, cellClass: 'thumbnailCell' },
            { field: 'gender', cellClass: 'thumbnailCell' }
        ]
    };
}]);