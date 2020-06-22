import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import MerchandiseCategory from '../Container Components/MerchandiseCategory';
import menu from '../menu/menu.json';

const NavLink = styled.nav`
  display: flex;
  width: 95%;
  height: 60px;
  margin: 0 1rem 0 0;
  padding: 0;
  overflow: scroll;
  border-bottom: 3px solid whitesmoke;
  border-radius: 1rem;
`;

const Category = styled(Link)`
  width: 20%;
  min-width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: wheat;
  font-size: 1.5rem;
  text-decoration: none;
  border-radius: 1rem;
  &:hover {
    background-color: #102042;
  }
  &:visited {
    color: wheat;
  }
`;

const InitialPage = styled.div`
  display: flex;
  width: 90%;
  height: 300px;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid wheat;
  border-radius: 1rem;
  background-color: #102042;
`;

export default function merchandiseList() {
  return (
    <>
      <NavLink>
        <Category to="/ordering/categoryA">
          {menu[0][0]}
        </Category>
        <Category to="/ordering/categoryB">
          {menu[1][0]}
        </Category>
        <Category to="/ordering/categoryC">
          {menu[2][0]}
        </Category>
        <Category to="/ordering/categoryD">
          {menu[3][0]}
        </Category>
        <Category to="/ordering/categoryE">
          {menu[4][0]}
        </Category>
        <Category to="/ordering/categoryF">
          {menu[5][0]}
        </Category>
        <Category to="/ordering/categoryG">
          {menu[6][0]}
        </Category>
      </NavLink>
      <Route exact path="/ordering">
        <InitialPage>
          請選擇類別
        </InitialPage>
      </Route>
      <Route path="/ordering/categoryA">
        <MerchandiseCategory number={0} />
      </Route>
      <Route path="/ordering/categoryB">
        <MerchandiseCategory number={1} />
      </Route>
      <Route path="/ordering/categoryC">
        <MerchandiseCategory number={2} />
      </Route>
      <Route path="/ordering/categoryD">
        <MerchandiseCategory number={3} />
      </Route>
      <Route path="/ordering/categoryE">
        <MerchandiseCategory number={4} />
      </Route>
      <Route path="/ordering/categoryF">
        <MerchandiseCategory number={5} />
      </Route>
      <Route path="/ordering/categoryG">
        <MerchandiseCategory number={6} />
      </Route>
    </>
  );
}
