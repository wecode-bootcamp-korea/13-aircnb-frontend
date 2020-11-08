import styled from "styled-components";
import { displayNone, visibilityHidden } from "../../Styles/Theme";

export const ProfileMenu = styled.div`
  ${({ active }) => !active && displayNone}
  position: fixed;
  top: 75px;
  right: 80px;
  width: 240px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0.5px #ddd;
  border-radius: 10px;
  font-size: 14px;
  z-index: 200;

  div {
    padding: 3px 0;
    ul {
      li {
        cursor: pointer;
        &:hover {
          background-color: #f9f9f9;
        }
        span {
          padding: 0 15px;
        }
      }
    }
  }
`;

export const ProfileMenuGroup = styled.div`
  & {
    li {
      padding: 13px 0;
    }
  }
  & + & {
    border-top: 1px solid #ddd;
    li {
      padding: 13px 0;

      &:first-child {
        margin-top: 2px;
      }
    }
  }
`;
