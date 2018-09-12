class ForeignFriendsTableController {
    constructor(Countries, $mdDialog, RandomCountriesList, GetForeignFriendsService, $location, SelectedForeignFriendsService) {
        this.Countries = Countries;
        this.$mdDialog = $mdDialog;
        this.RandomCountriesList = RandomCountriesList;
        this.GetForeignFriendsService = GetForeignFriendsService;
        this.$location = $location;
        this.SelectedForeignFriendsService = SelectedForeignFriendsService;

        if (!this.fetchedUser.friends.foreignFriends.length) {
            this.searchForeignFriends();
        }

        this.selectedFriend = null;
        this.selectedTwin = null;
        this.twins = this.GetForeignFriendsService.twins;
    }

    closeDialog() {
        this.$mdDialog.hide();
    }

    goToAnchor(groupName) {
        this.$location.hash(groupName);
    }

    isFavouriteFriendChecked(friendsId) {
        return this.SelectedForeignFriendsService.isChecked(this.fetchedUser, friendsId);
    }

    setCountryFullName(countryCode) {
        return this.Countries.getCountryFullName(countryCode);
    }

    setFavouriteFriendsList(friend) {
        this.SelectedForeignFriendsService.addToFavouriteFriends(this.fetchedUser, friend);
    }

    searchForeignFriends() {
        this.RandomCountriesList.getRandomCountriesList(this.fetchedUser);
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

    showDialogWithTwins() {
        this.selectedTwin = null;
        this.$mdDialog.show({
            controller: () => this,
            controllerAs: '$ctrl',
            templateUrl: 'foreign-friends/foreign-friends-table/dialog/foreign-friend-dialog-template-twins-list.html'
        });
    }
}

ForeignFriendsTableController.$inject = ['Countries', '$mdDialog', 'RandomCountriesList', 'GetForeignFriendsService', '$location', 'SelectedForeignFriendsService'];

usersApp.controller('ForeignFriendsTableController', ForeignFriendsTableController);  // eslint-disable-line no-undef