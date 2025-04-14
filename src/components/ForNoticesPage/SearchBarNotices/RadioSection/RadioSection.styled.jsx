// @ts-nocheck
import styled from "styled-components";

export const ContainerRadioBtns = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(38, 38, 38, 0.1);
  animation: appearDown 1400ms ease 1;

  @media screen and (min-width: 768px) {
    margin-top: 4px;
    padding-top: 4px;
  }
`;

export const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  li {
    color: var(--dark-color);
    background-color: var(--white-color);
    height: 42px;
    border-radius: 30px;
    padding: 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: var(--hover-general);
 
    &:hover {
      background-color: var(--accent-color);
      color: var(--white-color);
    }

    button {
      outline: none;
      border: none;
      background: transparent;
      width: 20px;
      height: 20px;

      svg {
        stroke: var(--white-color);
      }
    }
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex-wrap: nowrap;

    li {
      height: 48px;
      padding: 14px;
      font-size: 16px;
      line-height: 1.25;
    }
  }
`;
