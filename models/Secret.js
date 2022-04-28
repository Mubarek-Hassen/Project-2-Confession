const mongoose = require('mongoose');

const secretSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'name cannot be empty :('],
        maxlength: 500
    },
    category: {
        type: String,
        required: [true, 'price cannot be empty!']
    },
    confessor:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
    // username:{
    //     type: mongoose.Types.ObjectId.username,
    //     ref: 'User'
    // }
},
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Secret = mongoose.model('Secret', secretSchema);

module.exports = Secret;