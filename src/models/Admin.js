const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");

const AdminSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    IdAdmin:{type:String,required:true},
    date: { type: Date, default: Date.now }
});

AdminSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

AdminSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model("Admin", AdminSchema);