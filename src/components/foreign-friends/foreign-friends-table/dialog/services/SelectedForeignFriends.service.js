class SelectedForeignFriendsService {

    constructor() {
    }

    addToFavouriteFriends(fetchedUser, friend) {
        if (_.find(fetchedUser.friends.favouriteFriends, friendFromList => (friendFromList.id === friend.id))) {
            _.remove(fetchedUser.friends.favouriteFriends, friendFromList => (friendFromList.id === friend.id));
        } else {
            fetchedUser.friends.favouriteFriends.push(friend);
        }
    }

    isChecked(fetchedUser, friendsId) {
        if (_.find(fetchedUser.friends.favouriteFriends, friendFromList => (friendFromList.id === friendsId))) {
            return true;
        }
    }

}

SelectedForeignFriendsService.$inject = [];

usersApp.service('SelectedForeignFriendsService', SelectedForeignFriendsService); // eslint-disable-line no-undef