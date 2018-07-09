usersApp.controller('usersController', ['$scope', 'passingUserService', function ($scope, passingUserService) { // eslint-disable-line

    $scope.gridOptions = { rowHeight: 50 };

    $scope.gridOptions.onRegisterApi = (gridApi) => {
        $scope.gridApi = gridApi;
        $scope.gridApi.grid.registerDataChangeCallback(() => {
            $scope.gridApi.treeBase.expandAllRows();
        });
    };

    $scope.passingUserService = passingUserService.userArray;

    passingUserService.userArray.then((data) => {

        $scope.gridOptions = {
            enableSorting: true,
            rowHeight: 50,
            columnDefs: [
                { field: 'thumbnail', cellClass: 'thumbnailCell', cellTemplate: '<img ng-src=\'{{grid.getCellValue(row, col)}}\'>' },
                { field: 'firstName', cellClass: 'thumbnailCell' },
                {
                    field: 'lastName',
                    cellClass: 'thumbnailCell',
                    cellTemplate: '<a ng-click="grid.appScope.cellClicked(row,col)" ui-sref="user-details({id: row.entity.id })" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</a>'
                },
                { field: 'age', cellClass: 'thumbnailCell' },
                { field: 'gender', grouping: { groupPriority: 0 }, sort: { priority: 1, direction: 'asc' }, cellClass: 'thumbnailCell' }
            ],
            data
        };
        $scope.gridOptions.onRegisterApi = (gridApi) => {
            $scope.gridApi = gridApi;
            $scope.gridApi.grid.registerDataChangeCallback(() => {
                $scope.gridApi.treeBase.expandAllRows();
            });
        };
    });
}]);