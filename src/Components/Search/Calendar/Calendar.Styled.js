import styled from "styled-components";
import { visibilityHidden } from "../../../Styles/Theme";

export const CalendarModule = styled.div`
  ${({ btnActive }) => !btnActive && visibilityHidden}
  position: fixed;
  width: 340px;
  top: 15px;
  left: 350px;
  z-index: 400;
`;
