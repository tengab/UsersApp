usersApp.service('passingUserService', function($http) { // eslint-disable-line prefer-arrow-callback, no-undef

    this.userArray = $http({
        method: 'GET',
        url: 'https://randomuser.me/api/?results=10&nat=US&seed=a'
    }).then((response) => {

        const gridData = response.data.results;
        const gridInput = gridData.map((el) => {
            const rowObject = {};
            rowObject.thumbnail = el.picture.thumbnail;
            rowObject.largePicture = el.picture.large;
            rowObject.firstName = el.name.first.charAt(0).toUpperCase() + el.name.first.slice(1);
            rowObject.lastName = el.name.last.charAt(0).toUpperCase() + el.name.last.slice(1);
            rowObject.age = el.dob.age;
            rowObject.gender = el.gender;
            rowObject.id = el.login.uuid;
            return rowObject;
        });
        return gridInput;
    },(error) => { });
});