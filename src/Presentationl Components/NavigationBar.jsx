import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavBase = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: #223052;
  z-index: 1;
  @media (max-width: 576px) {
    width: 100%;
    height: 60px;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-bottom: solid 1px #e8eff0;
  font-size: 1.2rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
  margin: 0.5rem;
  padding: 0.5rem;
  color: lightcyan;
  text-decoration: none;
  &:visited {
    color: lightcyan;
  }
  &:hover {
    background-color: #102042;
    border-radius: 0.75rem;
  }
`;

export default function () {
  return (
    <NavBase>
      <NavBar>
        <NavLink to="/ordering">點單</NavLink>
        <NavLink to="/ordersconsulting">訂單查詢</NavLink>
        <NavLink to="/about_us">關於我們</NavLink>
        <NavLink to="/D">更多</NavLink>
      </NavBar>
    </NavBase>
  );
}
