use('test');

db.getCollection('courses').insertMany([
    {
        "name": "python",
        "duration": "3h",
        "instructor": "alex"
    },
    {
        "name": "javascript",
        "duration": "2.5h",
        "instructor": "emma"
    },
    {
        "name": "c++",
        "duration": "4h",
        "instructor": "ryan"
    },
    {
        "name": "html",
        "duration": "1.5h",
        "instructor": "sophia"
    },
    {
        "name": "css",
        "duration": "2h",
        "instructor": "david"
    },
    {
        "name": "ruby",
        "duration": "3h",
        "instructor": "lisa"
    }
]);
console.log(`Done instering data`);