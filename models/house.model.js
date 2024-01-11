
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    propertyOwner:{
       type: String,
        required: [true, "Property owner is required"]
    },

    propertyName: {
        type: String,
        unique: true,
        required: [true, "Property name is required"]
    },
    propertyPicture: {
        type: String,
        required: [true, "Property picture is required"],
        default: "https://media.istockphoto.com/id/1145780239/photo/dark-interior-with-open-kitchen.jpg?s=612x612&w=0&k=20&c=sigz2x-O26RYwC49hKqozEJxrFX4CR9zqiTCTSXx9e4="

    },
    description: {
        type: String,
        required: [true,"The Description of Property is required"]

    },
    cost: {
        type: String,
        required: [true,"The Cost of Property is required"]

    },
    email: {
        type: String,
        required: [true,"The email is required"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ]

    },
    contact: {
        type: String,
        required: [true,"The contact is required"],
        unique: true

    }

});

module.exports = mongoose.model('house', adminSchema);