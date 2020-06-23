import React from 'react';
import styled from '@emotion/styled';
import NavLink from './NavLink';

const NavBase = styled.nav`
  width: 90%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-bottom: solid 1px #e8eff0;
  margin-bottom: 4px;
  position: fixed;
  background-color: #223052;
  z-index: 1;
  @media (max-width: 576px) {
    width: 100%;
    height: 60px;
    align-items: center;
  }
`;

export default function () {
  return (
    <NavBase>
      <NavLink />
    </NavBase>
  );
}
