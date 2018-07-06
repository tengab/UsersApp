usersApp.controller('usersController', ['$scope', '$http', '$stateParams', 'passingUserService', function ($scope, $http, $stateParams, passingUserService) { // eslint-disable-line

    $scope.gridOptions = { rowHeight: 50 };

    $scope.passingUserService = passingUserService.userArray;

    passingUserService.userArray.then((data) => {
        $scope.gridOptions = {
            enableSorting: true,
            rowHeight: 50,
            columnDefs: [
                { field: 'thumbnail', enableSorting: false, cellClass: 'thumbnailCell', cellTemplate: '<img ng-src=\'{{grid.getCellValue(row, col)}}\'>' },
                { field: 'firstName', enableSorting: false, cellClass: 'thumbnailCell' },
                {
                    field: 'lastName',
                    enableSorting: false,
                    cellClass: 'thumbnailCell',
                    cellTemplate: '<a ng-click="grid.appScope.cellClicked(row,col)" ui-sref="user-details({id: row.entity.id })" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</a>'
                },
                { field: 'age', enableSorting: false, cellClass: 'thumbnailCell' },
                { field: 'gender', cellClass: 'thumbnailCell' }
            ],
            data
        };
    });
}]);