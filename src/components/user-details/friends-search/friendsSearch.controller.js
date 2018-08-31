class FriendsSearchCtrl {
    constructor($mdDialog, FriendsSearchService, MarkerMapClickService) {
        this.MarkerMapClickService = MarkerMapClickService;
        this.FriendsSearchService = FriendsSearchService;
        this.$mdDialog = $mdDialog;

        this.MarkerMapClickService.marker(null);
        this.FriendsSearchService.areFriendsSearched = false;

        this.friendDataToDialog = {};
        this.isFriendsSearchHidden = true;
    }

    clickedFriend(index) {
        this.MarkerMapClickService.marker(index);
    }

    showDialog(friend) {
        this.friendDataToDialog = friend;
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

FriendsSearchCtrl.$inject = ['$mdDialog', 'FriendsSearchService', 'MarkerMapClickService'];

usersApp.controller('FriendsSearchCtrl', FriendsSearchCtrl); // eslint-disable-line no-undef