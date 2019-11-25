import fs from "fs";

class FileManager {
  constructor() {
    this.filePath = "";
  }

  saveFile(filePath, text) {
    return new Promise((resolve) => {
      fs.writeFileSync(filePath, text);
      this.filePath = filePath;
      resolve();
    });
  }
}

function createFileManager() {
  return new FileManager();
}

export default createFileManager;