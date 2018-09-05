class RandomCountriesList {
    constructor(Countries, GetForeignFriendsService) {
        this.Countries = Countries;
        this.GetForeignFriendsService = GetForeignFriendsService;
        this.countriesForFriendsSuggestions = [].concat(this.Countries.definedCountriesForDatabaseSearch);
        this.randomCountries = [];
    }

    getRandomCountriesList(fetchedUser) {

        this.randomCountries = (_.sampleSize(this.countriesForFriendsSuggestions, 3));

        this.randomCountries.map((countryCode) => {
            this.GetForeignFriendsService.getForeignFriends(countryCode, fetchedUser);
            return _.remove(this.countriesForFriendsSuggestions, country => (country === countryCode));
        });
    }
}

RandomCountriesList.$inject = ['Countries', 'GetForeignFriendsService'];

usersApp.service('RandomCountriesList', RandomCountriesList); // eslint-disable-line no-undef