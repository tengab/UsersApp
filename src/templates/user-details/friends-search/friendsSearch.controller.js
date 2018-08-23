class FriendsSearchCtrl {
    constructor(FriendsSearchService, $mdDialog, $scope, MarkerMapClickService) {
        this.MarkerMapClickService = MarkerMapClickService;
        this.FriendsSearchService = FriendsSearchService;
        this.chosenFriend = null;
        this.MarkerMapClickService.marker(null);
        this.FriendsSearchService.areFriendsSearched = false;

        this.$mdDialog = $mdDialog;
        this.$scope = $scope;

    }

    clickedFriend(index) {
        this.chosenFriend = index;
        this.MarkerMapClickService.marker(index);
    }

    selectTab(index) {

        this.MarkerMapClickService.marker(index);
    }

    showDialog(friend) {
        // const parentEl = angular.element(document.body);
        this.$mdDialog.show({
            // parent: parentEl,
            targetEvent: friend,
            controller: DialogController,
            template:
                `<md-dialog>
                    <md-dialog-content>
                        <div class="panel panel-info">
                            <div class="panel-body">
                                <img ng-src="${friend.picture.large}"/>
                                <h3>${friend.name.title} ${friend.name.first} ${friend.name.last}</h3>                               
                                <h5>Street: ${friend.location.street}</h5>
                                <h5>City: ${friend.location.city}</h5>
                                <h5>State: ${friend.location.state}</h5>                                
                                <h5>Country: ${friend.natFullName}</h5>
                                <hr/>
                                <h5>Phone number: ${friend.phone}</h5>
                                <h5>E-mail: ${friend.email}</h5>
                            </div>
                        </div>
                    </md-dialog-content>
                 <md-dialog-actions>
                    <button ng-click="closeDialog()" class="btn btn-warning">
                      Close
                    </button>
                  </md-dialog-actions>
                </md-dialog>`

        });

        function DialogController($scope, $mdDialog) {
            $scope.closeDialog = function() {
                $mdDialog.hide();
            };
        }
    }


}

FriendsSearchCtrl.$inject = ['FriendsSearchService', '$mdDialog', '$scope', 'MarkerMapClickService'];

usersApp.controller('FriendsSearchCtrl', FriendsSearchCtrl); // eslint-disable-line no-undef