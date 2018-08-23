class GridController {
    constructor(uiGridConstants, APIService, Countries, DeleteUserService) {
        this.DeleteUserService = DeleteUserService;
        this.uiGridConstants = uiGridConstants;
        this.APIService = APIService;
        this.Countries = Countries;

        this.gridDataDisplay();
    }

    gridDataDisplay() {
        this.gridOptions = {
            enableSorting: true,
            rowHeight: 50,
            minRowsToShow: 7,
            showTreeExpandNoChildren: true,
            showHeader: true,
            virtualizationThreshold: '5000',
            enableHorizontalScrollbar: this.uiGridConstants.scrollbars.NEVER,
            columnDefs: [
                {
                    name: 'Thumbnail',
                    field: 'picture.thumbnail', cellClass: 'thumbnailCell',
                    cellTemplate: `<img ng-src='{{grid.getCellValue(row, col)}}'>`
                },
                {name: 'First name', field: 'name.first', cellClass: 'thumbnailCell'},
                {
                    name: 'last name',
                    field: 'name.last',
                    cellClass: 'thumbnailCell',
                    cellTemplate: 'users/directives/grid/cell-templates/last-name-cell.html'
                },
                {
                    name: 'nationality',
                    field: 'natFullName',
                    cellClass: 'thumbnailCell'
                },
                {field: 'age', cellClass: 'thumbnailCell'},
                {
                    field: 'gender',
                    grouping: {groupPriority: 1},
                    sort: {priority: 0, direction: 'desc'},
                    cellClass: 'thumbnailCell'
                },
                {
                    name: 'delete user',
                    cellClass: 'thumbnailCell',
                    cellTemplate: 'users/directives/grid/cell-templates/delete-button.html'
                }
            ]
        };
        if (this.APIService.usersList.length === 0) {
            this.APIService.getUsers().then(() => {
                this.gridOptions.data = this.APIService.usersList;
            });
        } else {
            this.gridOptions.data = this.APIService.usersList;
        }

        this.gridOptions.onRegisterApi = (gridApi) => {
            this.gridApi = gridApi;

            this.gridApi.grid.registerDataChangeCallback(() => {
                this.gridApi.treeBase.expandAllRows();
            });
        };
    }

    deleteUser(row) {
        this.DeleteUserService.deleteUser(row.entity.id);
    }

}

GridController.$inject = ['uiGridConstants', 'APIService', 'Countries', 'DeleteUserService'];

usersApp.controller('UsersGridController', GridController);  // eslint-disable-line no-undef