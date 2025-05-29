https://www.mongodb.com/docs/manual/reference/operator/query/
use ('test')
// // console.log(db)
db.createCollection("courses")

// db.courses.insertMany([
//     {
//         "name": "python",
//         "duration": "3h",
//         "instructor": "alex"
//     },
//     {
//         "name": "javascript",
//         "duration": "2.5h",
//         "instructor": "emma"
//     },
//     {
//         "name": "c++",
//         "duration": "4h",
//         "instructor": "ryan"
//     },
//     {
//         "name": "html",
//         "duration": "1.5h",
//         "instructor": "sophia"
//     },
//     {
//         "name": "css",
//         "duration": "2h",
//         "instructor": "david"
//     },
//     {
//         "name": "ruby",
//         "duration": "3h",
//         "instructor": "lisa"
//     }
// ])
db.courses.find({})
// db.courses.find({duration: {$eq: "4h"}})
// db.courses.find({ duration: "4h"})
// db.courses.find({ duration: "3h", instructor: "lisa"}, { duration: 0 }).pretty().limit(1).skip(1);
// let result = db.courses.find({ duration: "3h", instructor: "lisa"}, { duration: 0 }).pretty().limit(1)
// console.log(result.count())
// console.log(result.pretty())
// let result2 = db.courses.findOne({ });
// console.log(result2)
// db.courses.updateMany({"instructor": "alex"}, {$set: {instructor: "lisa"}})
// db.courses.deleteMany({duration: "1h"})