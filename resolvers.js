class Friend {
    constructor(id, { firstName, lastName, gender, language, email }){
                        this.id = id;
                        this.firstName =firstName;
                        this.lastName = lastName;
                        this.gender = gender;
                        this.language = language;
                        this.email = email;
    }
}
const friendDatabase = {};

const resolvers = { 
    // friend: () => {
    //     return {
    //         "id": 111000,
    //         "firstName": "Sekou",
    //         "lastName": "Dosso",
    //         "gender": "Male",
    //         "language": "French",
    //         "emails": [
    //                     { email: "youknowme@gmail.com" },
    //                     { email: "sekou.dosso82@gmail.com"}
    //         ],
    //     }
    // },
    getFriend: ({ id }) => {
        return new Friend(id, friendDatabase[id]);
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
    
};

export default resolvers; 
