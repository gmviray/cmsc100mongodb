import mongoose from "mongoose";

await mongoose.connect('mongodb://127.0.0.1:27017/ICS',
{useNewUrlParser: true, useUnifiedTopology: true})

// initialize
const Student = mongoose.model('students', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
})

// finds a data (one only)
// let data = await Student.findOne({age : 17})
// console.log(data);

// const newStudent = new Student({
//     stdnum: '123456789',
//     fname: "Juan",
//     lname: "Dela Cruz",
//     age: 20
// })

// find many
// let data = await Student.find({age : 17})
// console.log(data);


// saves new data
//let data = await newStudent.save();


// UPDATE DATA
// let updateStudent = await Student.findOne({
//     stdnum: '123456789'
// })

// updateStudent.age = 25

// let data = await updateStudent.save();

// let updateStudent = await Student.update (
//     {age: 17},
//     {$set: {fname: "John"}}
// )

// let updateStudent = await Student.updateMany (
//     {age: 17},
//     {$set: {fname: "John"}}
// )

// let data = await Student.delete({
//     stdnum: '123456789'
// });

// let data = await Student.deleteMany({
//     age: {$gte: 17, $lte: 20},
// });

//console.log(updateStudent)

// to exit the app
process.exit();