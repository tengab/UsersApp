class SelectedForeignFriendsService {

    constructor() {
        this.FavouriteFriends = [];
    }

    addToFavouriteFriends(friend) {
        if (_.find(this.FavouriteFriends, friendFromList => (friendFromList.id === friend.id))) {
            _.remove(this.FavouriteFriends, friendFromList => (friendFromList.id === friend.id));
        } else {
            friend.isFavourite = true;
            this.FavouriteFriends.push(friend);
        }
    }

    isChecked(friendsId) {
        if (_.find(this.FavouriteFriends, friendFromList => (friendFromList.id === friendsId))) {
            return true;
        }
    }

}

SelectedForeignFriendsService.$inject = [];

usersApp.service('SelectedForeignFriendsService', SelectedForeignFriendsService); // eslint-disable-line no-undef