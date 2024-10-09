const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    imgUrl: {
        type: Array,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Partner = mongoose.model("Partner", partnerSchema);
module.exports = Partner;
