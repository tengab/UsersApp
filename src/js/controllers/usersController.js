usersApp.controller('usersController', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) { // eslint-disable-line

    $scope.gridOptions = {
        enableSorting: true,
        rowHeight: 50,
        minRowsToShow: 10,
        showTreeExpandNoChildren: true,
        showHeader: true,
        columnDefs: [
            {
                field: 'thumbnail', cellClass: 'thumbnailCell',
                cellTemplate: '<img ng-src=\'{{grid.getCellValue(row, col)}}\'>',
            },
            { field: 'firstName', cellClass: 'thumbnailCell' },
            {
                field: 'lastName',
                cellClass: 'thumbnailCell',
                cellTemplate: '<a ng-click="grid.appScope.cellClicked(row,col)" ui-sref="user-details({id: row.entity.id })" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</a>'
            },
            { field: 'age', cellClass: 'thumbnailCell' },
            { field: 'gender', grouping: { groupPriority: 1 }, sort: { priority: 0, direction: 'desc' }, cellClass: 'thumbnailCell' }
        ]
    };

    $scope.gridOptions.onRegisterApi = (gridApi) => {
        $scope.gridApi = gridApi;

        $scope.gridApi.grid.registerDataChangeCallback(() => {
            $scope.gridApi.treeBase.expandAllRows();
        });
    };

    $scope.gridOptions.virtualizationThreshold = '5000';
    $scope.gridOptions.enableHorizontalScrollbar = uiGridConstants.scrollbars.NEVER;

    $http.get('https://randomuser.me/api/?results=30&nat=US&seed=a')
        .then((response) => {
            const gridInput = response.data.results.map((el) => {
                const rowObject = {};
                rowObject.thumbnail = el.picture.thumbnail;
                rowObject.largePicture = el.picture.large;
                rowObject.firstName = el.name.first.charAt(0).toUpperCase() + el.name.first.slice(1);
                rowObject.lastName = el.name.last.charAt(0).toUpperCase() + el.name.last.slice(1);
                rowObject.age = el.dob.age;
                rowObject.gender = el.gender;
                rowObject.id = el.login.uuid;
                return rowObject;
            });
            return gridInput;
        }).then((data) => {

            $scope.gridOptions.data = data;

        });
}]);