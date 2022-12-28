import styled from "styled-components";
import { colors } from "../utils/colors";

function Toolbar() {
  return <Wrapper>
    <Button>+</Button>
  </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: ${colors.light2};
  font-size: 1rem;
`;

export default Toolbar;
