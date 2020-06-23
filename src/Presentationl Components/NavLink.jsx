import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavBar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  & li:hover {
    background-color: #102042;
    border-radius: 1rem;
  }
  @media (max-width: 321px) {
    font-size: 1rem;
  }
`;
const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  margin: 0.5rem;
  padding: 0.5rem;
  color: lightcyan;
  text-decoration: none;
  &:visited {
    color: lightcyan;
  }
`;

export default function () {
  return (
    <NavBar>
      <li><NavLink to="/ordering">點單</NavLink></li>
      <li><NavLink to="/ordersconsulting">訂單查詢</NavLink></li>
      <li><NavLink to="/about_us">關於我們</NavLink></li>
      <li><NavLink to="/D">更多</NavLink></li>
    </NavBar>
  );
}
