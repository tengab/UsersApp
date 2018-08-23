class FriendsSearchCtrl {
    constructor(FriendsSearchService, $mdDialog, MarkerMapClickService) {
        this.MarkerMapClickService = MarkerMapClickService;
        this.FriendsSearchService = FriendsSearchService;
        this.$mdDialog = $mdDialog;

        this.MarkerMapClickService.marker(null);
        this.FriendsSearchService.areFriendsSearched = false;

        this.friend = {};
    }

    clickedFriend(index) {
        this.MarkerMapClickService.marker(index);
    }

    showDialog(friend) {
        this.friend = friend;
        this.$mdDialog.show({
            controller: () => this,
            controllerAs: '$ctrl',
            templateUrl: 'user-details/friends-search/dialog/friend-dialog-template.html'
        });
    }

    closeDialog() {
        this.$mdDialog.hide();
    }


}

FriendsSearchCtrl.$inject = ['FriendsSearchService', '$mdDialog', 'MarkerMapClickService'];

usersApp.controller('FriendsSearchCtrl', FriendsSearchCtrl); // eslint-disable-line no-undef