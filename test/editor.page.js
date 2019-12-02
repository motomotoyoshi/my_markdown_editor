const emojione = require("emojione");

module.exports = class EditorPage {
  constructor(client) {
    this.client = client;
  }

  inputText(text) {
    return this.client.waitForExist("#editor")
      .then(() => this.client.setValue("#editor", text));
  }

  getRenderHTML() {
    return this.client.waitForExist("#previewer")
      .then(() => this.client.getHTML("#previewer"));
  }

}