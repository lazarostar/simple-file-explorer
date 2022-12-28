import React from "react";
import FileExplorer from "./components/FileExplorer";
import { FileJson } from "./utils/FileSystem";
import { MOCK_FILES } from "./data/MockFiles";
import { FileSystem } from "./utils/FileSystem";

function App() {
  const fileSystem: FileSystem = new FileSystem(MOCK_FILES as FileJson);
  return <FileExplorer fileSystem={fileSystem} />;
}

export default App;
