class FriendsSearchCtrl {
    constructor(FriendsSearch, $mdDialog, $scope) {
        this.FriendsSearch = FriendsSearch;
        this.chosenFriend = null;
        this.FriendsSearch.marker(null);
        this.FriendsSearch.areFriendsSearched = false;

        this.$mdDialog = $mdDialog;
        this.$scope = $scope;

    }

    clickedFriend(index) {
        this.chosenFriend = index;
        this.FriendsSearch.marker(index);
    }

    selectTab(index) {

        this.FriendsSearch.marker(index);
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

FriendsSearchCtrl.$inject = ['FriendsSearch', '$mdDialog', '$scope'];

usersApp.controller('FriendsSearchCtrl', FriendsSearchCtrl); // eslint-disable-line no-undef