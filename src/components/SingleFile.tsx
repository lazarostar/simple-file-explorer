import styled from "styled-components";
import { colors } from "../utils/colors";
import {
  FaFolder,
  FaFolderOpen,
  FaFile,
  FaAngleRight,
  FaAngleDown,
} from "react-icons/fa";

function SingleFile({
  id,
  name,
  depth,
  isFile,
  isOpen,
  selected,
  onClick,
  onDragStart,
  onDragOver,
  onDrop,
}: {
  id: number;
  name: string;
  depth: number;
  isFile: boolean;
  isOpen: boolean;
  selected: boolean;
  onClick: (id: number) => void;
  onDragStart: (id: number, event: React.DragEvent) => void;
  onDragOver: (id: number, event: React.DragEvent) => void;
  onDrop: (id: number, event: React.DragEvent) => void;
}) {
  return (
    <Wrapper
      depth={depth}
      selected={selected}
      onClick={() => onClick(id)}
      draggable={true}
      onDragStart={(event) => onDragStart(id, event)}
      onDragOver={(event) => onDragOver(id, event)}
      onDrop={(event) => onDrop(id, event)}
    >
      {isFile && <FaFile color={colors.light1} />}
      {!isFile && isOpen && (
        <>
          <ArrowWrapper depth={depth}>
            <FaAngleDown color={colors.light1} />
          </ArrowWrapper>
          <FaFolderOpen color={colors.light1} />
        </>
      )}
      {!isFile && !isOpen && (
        <>
          <ArrowWrapper depth={depth}>
            <FaAngleRight color={colors.light1} />
          </ArrowWrapper>
          <FaFolder color={colors.light1} />
        </>
      )}
      <Paragraph>{name}</Paragraph>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ depth: number; selected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  padding-left: ${(props: any) => 12 + 10 * props.depth + "px"};
  cursor: pointer;
  background-color: ${(props: any) =>
    props.selected ? colors.dark3 : "transparent"};
  &:hover {
    background-color: ${(props: any) =>
      props.selected ? colors.dark3 : colors.dark2};
  }
`;
const ArrowWrapper = styled.div<{ depth: number }>`
  position: absolute;
  top: 0px;
  left: ${(props: any) => -6 + 10 * props.depth + "px"};
  height: 100%;
  display: flex;
  align-items: center;
`;
const Paragraph = styled.p`
  color: ${colors.light2};
  line-height: 1.7;
  margin: 0px;
  padding: 0px;
`;

export default SingleFile;
