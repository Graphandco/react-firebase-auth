//
export function seedDatabase(firebase) {
    const users = [
        {
            userId: 'qgiG7WNJqEQnVetkia6w5yy9mBC3',
            username: 'regis',
            fullName: 'Régis Daum',
            emailAddress: 'contact@graphandco.com',
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'raphael',
            fullName: 'Raffaello',
            emailAddress: 'test@graphandco.com',
            dateCreated: Date.now()
        }
    ];

    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k])
    }

    for (let i = 1; i <= 5; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '2',
                imageSrc: `/images/users/raphael/${i}.jpg`,
                caption: 'Saint George and the Dragon',
                likes: [],
                dateCreated: Date.now()
            })
    }
}