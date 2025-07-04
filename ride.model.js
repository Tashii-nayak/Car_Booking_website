const mongoose = require('mongoose');
const rideSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
    },
    pickup: {
        type: String,
        required: true,
    },
    fare:{
        type:Number,
        required: true,
    },
    status:{
        type: String,
        enum: ['pending', 'accepted', 'in-progress', 'completed', 'cancelled'],
        default: 'pending'
    },
    duration:{
        type: Number,
    },
    distance:{
        type: Number,
    },
    paymentId:{
        type: String,
    },
    orderId:{
        type: String,
    },
    destination: {
        type: String,
        required: true,
    },
    signature:{
        type: String,
    }
});

module.exports=mongoose.model('ride', rideSchema);