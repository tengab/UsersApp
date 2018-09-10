class RandomCountriesList {
    constructor(Countries, GetForeignFriendsService) {
        this.Countries = Countries;
        this.GetForeignFriendsService = GetForeignFriendsService;
        // this.countriesForFriendsSuggestions = [].concat(this.Countries.definedCountriesForDatabaseSearch);
        // this.randomCountries = [];
    }

    getRandomCountriesList(fetchedUser) {

        const randomCountries = (_.sampleSize(fetchedUser.friends.countriesForFriendsSuggestions, 3));

        randomCountries.map((countryCode) => {
            this.GetForeignFriendsService.getForeignFriends(countryCode, fetchedUser);
            return _.remove(fetchedUser.friends.countriesForFriendsSuggestions, country => (country === countryCode));
        });
    }
}

RandomCountriesList.$inject = ['Countries', 'GetForeignFriendsService'];

usersApp.service('RandomCountriesList', RandomCountriesList); // eslint-disable-line no-undef