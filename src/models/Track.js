const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitute: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,

    }
})

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        red: 'User',
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
});

mongoose.model('Track', trackSchema)