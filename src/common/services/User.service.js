class UserService {

    constructor(Countries) {
        this.Countries = Countries;

        this.id = Date.now().toString();
        this.age = null;
        this.gender = null;
        this.email = null;
        this.nat = null;
        this.natFullName = null;
        this.phone = null;
        this.picture = {
            thumbnail: '/images/nophoto_thumbnail.png',
            large: '/images/nophoto_large.png'
        };
        this.name = {
            first: null,
            last: null,
            title: null
        };
        this.location = {
            coordinates: {
                latitude: 'noData',
                longitude: 'noData'
            },
            street: null,
            city: null,
            state: null,
            postcode: null
        };
        this.addStatus = 'addedManually';
        this.friends = {
            foreignFriends: [],
            twins: [],
            favouriteFriends: [],
            countriesForFriendsSuggestions: []
        };
    }


    create() {
        return new UserService();
    }

    mapUser(backendUser) {
        const user = new UserService();
        user.id = backendUser.login.uuid;
        user.age = backendUser.dob.age;
        user.gender = backendUser.gender;
        user.email = backendUser.email;
        user.picture = {
            thumbnail: backendUser.picture.thumbnail,
            large: backendUser.picture.large
        };
        user.name = {
            first: _.startCase(backendUser.name.first),
            last: _.startCase(backendUser.name.last),
            title: _.startCase(backendUser.name.title)
        };
        user.location = {
            coordinates: {
                latitude: backendUser.location.coordinates.latitude,
                longitude: backendUser.location.coordinates.longitude
            },
            street: _.startCase(backendUser.location.street),
            city: _.startCase(backendUser.location.city),
            state: _.startCase(backendUser.location.state),
            postcode: backendUser.location.postcode
        };
        user.nat = backendUser.nat;
        user.natFullName = this.Countries.getCountryFullName(backendUser.nat);
        user.phone = backendUser.phone;
        user.addStatus = 'fetchedFromApi';
        user.friends = {
            foreignFriends: [],
            twins: [],
            countriesForFriendsSuggestions: [].concat(this.Countries.definedCountriesForDatabaseSearch),
            favouriteFriends: []
        };

        return user;
    }
}

UserService.$inject = ['Countries'];

usersApp.service('User', UserService); // eslint-disable-line no-undef