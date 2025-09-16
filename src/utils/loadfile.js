import { glob } from "glob";

export function getAllFiles(folderPath) {
  const files = glob(`../../assets/${folderPath}/*.{jpg,jpeg,png}`, { eager: true });
  return Object.keys(files).map((key) => {
    return {
      title: key.split("/").pop(), // file name as title
      path: key.replace("../assets", ""), // relative path
    };
  });
}

// Usage
const imagesCardFilePaths = getAllFiles("imagesFile"); 
console.log(imagesCardFilePaths);

const reelsCardFilePaths = getAllFiles("reelsFile");
console.log(reelsCardFilePaths);

const generalFilePaths = getAllFiles("general");
console.log(generalFilePaths);
