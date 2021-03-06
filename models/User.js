const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // profile: {
    //     type: String,
    //     required: [true, 'name cannot be empty :(']
    // },

        email: {
            type: String,
            required: [true, "Please Provide An Email Address."],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please Provide A Password"],
        },
        username: { 
            type: String, 
            required: true, 
            unique: true 
        },
        // avatar: {
        //     type: String,
        //     default:
        //         "https://welovedoodles.com/wp-content/uploads/2021/01/Havanese-puppies-in-New-York-300x243.jpg",
        // },
        secrets:{
            // wanting to show all secret postings from the user
            type: [mongoose.Types.ObjectId],
            ref: 'Secret'
            
        },
        comments: {
            // wanting too store all comments from the user???
            type: [mongoose.Types.ObjectId],
            ref: 'Comment'
        }
    },
    {
        timestamps: true,
    }
);


const User = mongoose.model('User', userSchema)

module.exports = User

