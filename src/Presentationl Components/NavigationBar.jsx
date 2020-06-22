import React from 'react';
import styled from '@emotion/styled';
import NavLink from './NavLink';

const NavBase = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-bottom: solid 1px #e8eff0;
  margin-bottom: 4px;
`;

export default function () {
  return (
    <NavBase>
      <NavLink />
    </NavBase>
  );
}
