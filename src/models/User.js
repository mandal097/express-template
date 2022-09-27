const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // fields are defined here
});

const User = new mongoose.model("User", userSchema)

module.exports = User;
