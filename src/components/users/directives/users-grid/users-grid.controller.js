class UsersGridController {
    constructor(uiGridConstants, UserListContainerService) {
        this.uiGridConstants = uiGridConstants;
        this.UserListContainerService = UserListContainerService;

        this.initGridOptions();
        if (!this.UserListContainerService.usersList.length) {
            this.UserListContainerService.getUsers().then(() => (this.gridOptions.data = this.UserListContainerService.usersList));
        }
        this.isGridHidden = true;
    }

    initGridOptions() {
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
                    field: 'gender',
                    // grouping: {groupPriority: 0},
                    sort: {priority: 2, direction: 'desc'}
                },
                {
                    name: 'thumbnail',
                    field: 'picture.thumbnail',
                    cellClass: 'cell-content',
                    cellTemplate: '<img ng-src="{{grid.getCellValue(row, col)}}">'
                },
                {
                    name: 'first name',
                    field: 'name.first'
                },
                {
                    name: 'last name',
                    field: 'name.last',
                    cellTemplate: 'users/directives/users-grid/cell-templates/last-name-cell.html'
                },
                {
                    name: 'nationality',
                    field: 'natFullName'
                },
                {
                    field: 'age'
                },
                {
                    name: 'delete user',
                    cellClass: 'cell-content',
                    cellTemplate: 'users/directives/users-grid/cell-templates/delete-button.html'
                }
            ],
            data: this.UserListContainerService.usersList,
            onRegisterApi: (gridApi) => {
                this.gridApi = gridApi;
                this.gridApi.grid.registerDataChangeCallback(() => {
                    this.gridApi.treeBase.expandAllRows();
                });
            }
        };
    }

    deleteUser(row) {
        this.UserListContainerService.deleteUser(row.entity.id);
    }

}

UsersGridController.$inject = ['uiGridConstants', 'UserListContainerService'];

usersApp.controller('UsersGridController', UsersGridController);  // eslint-disable-line no-undef