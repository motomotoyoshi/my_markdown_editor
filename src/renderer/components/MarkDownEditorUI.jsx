import React from "react";
import Editor from "./Editor";
import style from "./MarkDownEditorUI.css";
import Previewer from "./Previewer";
import { ipcRenderer } from "electron";

export default class MarkDownEditorUI extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(e) {
    this.setState({ text: e.target.value });
  }

  componentDidMount() {
    ipcRenderer.on("REQUEST_TEXT", () => {
      ipcRenderer.send("REPLY_TEXT", this.state.text);
    });

    ipcRenderer.on("SEND_TEXT", (_e, text) => {
      this.setState({ text });
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeAllListeners();
  }

  render() {
    return (
      <div className={style.markdownEditor}>
        <Editor
          className={style.editorArea}
          value={this.state.text}
          onChange={this.onChangeText}
        />
        <Previewer
          className={style.previewerArea}
          value={this.state.text}
        />
      </div>
    );
  }
}