class ForeignFriendsTableController {
    constructor(Countries, $mdDialog, RandomCountriesList, GetForeignFriendsService, $location) {
        this.Countries = Countries;
        this.$mdDialog = $mdDialog;
        this.RandomCountriesList = RandomCountriesList;
        this.GetForeignFriendsService = GetForeignFriendsService;
        this.$location = $location;

        if (!this.GetForeignFriendsService.foreignFriendsList.length) {
            this.searchForeignFriends();
        }
        this.selectedFriend = null;
        this.selectedTwin = null;
        this.twins = this.GetForeignFriendsService.twins;
    }

    searchForeignFriends() {
        this.RandomCountriesList.getRandomCountriesList(this.fetchedUser);
    }

    showDialogWithTwins() {
        this.selectedTwin = null;
        this.$mdDialog.show({
            controller: () => this,
            controllerAs: '$ctrl',
            templateUrl: 'foreign-friends/foreign-friends-table/dialog/foreign-friend-dialog-template-twins-list.html'
        });
    }

    showDialogOfPotentialFriend(friend) {
        this.selectedFriend = friend;
        this.$mdDialog.show({
            controller: () => this,
            controllerAs: '$ctrl',
            templateUrl: 'foreign-friends/foreign-friends-table/dialog/foreign-friend-dialog-template-selected-friend.html'
        });
    }

    showDialogOfSelectedTwin(twin) {
        this.selectedTwin = twin;
        this.$mdDialog.show({
            controller: () => this,
            controllerAs: '$ctrl',
            templateUrl: 'foreign-friends/foreign-friends-table/dialog/foreign-friend-dialog-template-selected-twin.html'
        });
    }

    closeDialog() {
        this.$mdDialog.hide();
    }

    setCountryFullName(countryCode) {
        return this.Countries.getCountryFullName(countryCode);
    }

    goToAnchor(groupName) {
        // this.$location.hash() !== `anchor${groupName}` ?
        this.$location.hash(groupName);
        // : this.$anchorScroll();
    }
}

ForeignFriendsTableController.$inject = ['Countries', '$mdDialog', 'RandomCountriesList', 'GetForeignFriendsService', '$location'];

usersApp.controller('ForeignFriendsTableController', ForeignFriendsTableController);  // eslint-disable-line no-undef