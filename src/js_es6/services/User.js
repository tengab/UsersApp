class User {

    constructor() {
        this.id = Date.now().toString();
        this.age = null;
        this.gender = null;
        this.email = null;
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
            }
        };
    }

    create() {
        return new User();
    }

    mapUser(backendUser) {
        const user = new User();
        user.id = backendUser.login.uuid;
        user.age = backendUser.dob.age;
        user.gender = backendUser.gender;
        user.email = backendUser.email;
        user.picture = {
            thumbnail: backendUser.picture.thumbnail,
            large: backendUser.picture.large
        };
        user.name = {
            first: backendUser.name.first.capitalize(),
            last: backendUser.name.last.capitalize(),
            title: backendUser.name.title.capitalize()
        };
        user.location = {
            coordinates: {
                latitude: backendUser.location.coordinates.latitude,
                longitude: backendUser.location.coordinates.longitude
            }
        };
        return user;
    }

    // createUser(
    //     thumbnail,
    //     largePicture,
    //     firstName,
    //     lastName,
    //     title,
    //     latitude,
    //     longitude,
    //     age,
    //     gender,
    //     id,
    //     email
    // ) {
    //     return {
    //         picture: {
    //             thumbnail,
    //             large: largePicture
    //         },
    //         name: {
    //             first: firstName.capitalize(),
    //             last: lastName.capitalize(),
    //             title: title.capitalize()
    //         },
    //         location: {
    //             coordinates: {
    //                 latitude,
    //                 longitude
    //             }
    //         },
    //         age,
    //         gender,
    //         id,
    //         email
    //     };
    //     // return this.newUser;
    // }
}

usersApp.service('User', User); // eslint-disable-line no-undef