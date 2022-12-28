import styled from "styled-components";
import { colors } from "../utils/colors";
import {
  VscNewFile,
  VscNewFolder,
  VscCollapseAll,
  VscRefresh,
} from "react-icons/vsc";

function ToolBar() {
  return (
    <Wrapper>
      <VscNewFile color={colors.light1} size={20} cursor="pointer" />
      <VscNewFolder color={colors.light1} size={20} cursor="pointer" />
      <VscRefresh color={colors.light1} size={20} cursor="pointer" />
      <VscCollapseAll color={colors.light1} size={20} cursor="pointer" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  padding: 5px;
`;

export default ToolBar;
