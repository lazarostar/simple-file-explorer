import { useState } from "react";
import styled from "styled-components";
import SingleFile from "./SingleFile";
import { colors } from "./colors";
import { FileSystem } from "../utils/FileSystem";

function FileExplorer({
  fileSystem,
  rootId = 1,
}: {
  fileSystem: FileSystem;
  rootId?: number;
}) {
  const [openedIds, setOpenedIds] = useState<number[]>([rootId]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const sortedFiles = fileSystem.getSortedFilesFromParentId(rootId, openedIds);

  const handleClick = (id: number) => {
    const file = fileSystem.getFileById(id);
    if (!file) return;

    setSelectedIds([file.id as number]);

    if (file.isFile) return;

    const curIndex = openedIds.indexOf(id);
    const alreadyOpened = curIndex !== -1;
    if (alreadyOpened) {
      setOpenedIds([
        ...openedIds.slice(0, curIndex),
        ...openedIds.slice(curIndex + 1),
      ]);
    } else {
      setOpenedIds([...openedIds, id]);
    }
  };

  return (
    <Wrapper>
      {sortedFiles.map((file) => {
        return (
          <SingleFile
            key={file.id}
            id={file.id as number}
            name={file.name}
            depth={file.depth}
            isFile={file.isFile}
            isOpen={openedIds.indexOf(file.id as number) !== -1}
            selected={selectedIds.indexOf(file.id as number) !== -1}
            onClick={handleClick}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${colors.dark1};
  max-width: 500px;
  height: 100vh;
  overflow-y: auto;
`;

export default FileExplorer;
