import fs from "fs";
import { resolve } from "dns";

class FileManager {
  saveFile(filePath, text) {
    return new Promise((resolve) => {
      fs.writeFileSync(filePath, text);
    });
  }
}

function createFileManager() {
  return new FileManager();
}

export default createFileManager;