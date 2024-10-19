const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName :{type : String,required : true},
    emailAddress :{type : String,required : true,unique:true},
    phoneNo :{type : Number,required : true},
    dob :{type : Date,required : true},
    gender:{type : String,required : true},
    address:{type : String,required : true}
},
{
    timestamps:true
});

const User = mongoose.model('User',userSchema);

// want to create custom collection name 'customUsers'
// const User = mongoose.model('User', userSchema, 'customUsers');  

module.exports = User;
