// import fs from "fs"

// function readfile(){
//     try{
//         let fileContent = fs.readFileSync("woafi.txt");
//         console.log(fileContent.toString());
//         console.log("hello");
//     } catch (error) {
//         console.log(error);
//     }
// }

// readfile();



//For aynchronous behavior
import fs from "fs";

function readfile() {
    try {
        fs.readFile("woafi.txt", (error, data)=>{

            console.log(data.toString());
        });
        console.log("hello")
    } catch (error) {
        console.log(error);
    }
}

readfile();




// fs.readFileSync("woafi.txt")
// .then((fileContent) => {console.log(fileContent.toString())
// })
// .catch((error) => {
//     console.log(error);
// })