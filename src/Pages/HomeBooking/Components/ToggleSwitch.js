import React from "react";
import styled from "styled-components";

const ToggleSwitch = ({ id, name, checked, onChange }) => {
  return (
    <ToggleSwitchSmall>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="toggle-switch-label" htmlFor={id}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </ToggleSwitchSmall>
  );
};

export default ToggleSwitch;

const ToggleSwitchSmall = styled.div`
  position: relative;
  width: 48px;
  height: 32px;
  vertical-align: middle;

  .toggle-switch-checkbox {
    display: none;
  }

  .toggle-switch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
    margin: 0;
    &:focus {
      outline: none;
    }
    span:focus {
      outline: none;
    }
  }

  .toggle-switch-inner {
    display: block;
    width: 200%;
    height: 32px;
    margin-left: -100%;
    transition: margin 0.2s ease-in 0s;
    &:before,
    &:after {
      display: block;
      float: left;
      width: 50%;
      height: 32px;
      padding: 0;
      line-height: 32px;
      font-size: 14px;
      box-sizing: border-box;
    }

    &:before {
      content: "";
      height: 32px;
      line-height: 32px;
      background-color: black;
    }
  }

  .toggle-switch-inner:after {
    content: "";
    height: 32px;
    line-height: 32px;
    background-color: #bbb;
  }

  .toggle-switch-switch {
    display: block;
    width: 32px;
    height: 32px;
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 16px;
    border: 1.5px solid #bbb;
    border-radius: 50%;
    transition: all 0.2s ease-in 0s;
  }

  .toggle-switch-checkbox:checked + .toggle-switch-label {
    .toggle-switch-inner {
      margin-left: 0;
    }

    .toggle-switch-switch {
      right: 0px;
    }
  }
`;
