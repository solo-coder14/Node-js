import fs from "fs/promises";
import fsn from "fs";
import path from 'path';

const directorPath = "D:\\Programming\\Web Development\\Node js\\codeWithHarry\\Organize Folder";

async function fileArranged() {
    try {
        let files = await fs.readdir(directorPath);
        console.log(files);
        
        for (const item of files) {
            
            let ext = item.split(".")[item.split(".").length - 1];
            
            if (ext !== "js" && ext !== "json" && item.split(".").length > 1) {
                const extDirPath = path.join(directorPath, ext);
                console.log( extDirPath);
                const oldPath = path.join(directorPath, item);
                const newPath = path.join(extDirPath, item);

                if (fsn.existsSync(extDirPath)) {
                    // Move file to existing directory
                    await fs.rename(oldPath, newPath);
                } else {
                    // Create directory and then move file
                    await fs.mkdir(extDirPath);
                    await fs.rename(oldPath, newPath);
                }
            }
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

fileArranged();