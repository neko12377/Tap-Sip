import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import MerchandiseCategory from '../Container Components/MerchandiseCategory';
import menu from '../menu/menu.json';

const NavLink = styled.nav`
  display: flex;
  width: 95%;
  height: 60px;
  margin: 0;
  padding: 0;
  overflow: scroll;
  border: 3px solid whitesmoke;
  background-color: #243155;
  border-radius: 1rem;
  @media (max-width: 576px) {
    margin: 0;
  }
`;

const Category = styled(Link)`
  width: 20%;
  min-width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightblue;
  font-size: 1.5rem;
  text-decoration: none;
  border-radius: 1rem;
  &:visited {
    color: lightblue;
  }
  &:hover {
    background-color: #102042;
    color: wheat;
  }
  @media (max-width: 576px) {
    width: 25%;
    min-width: 25%;
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
  @media (max-width: 576px) {
    width: 100%;
    margin: 1rem 0.5rem;
  }
`;

export default function merchandiseList() {
  return (
    <>
      <NavLink>
        {menu.map((shopsArray) => (<Category to={`/ordering/${shopsArray[0]}`}>{shopsArray[0]}</Category>))}
        {/* <Category to="/ordering/categoryA">
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
        </Category> */}
      </NavLink>
      <Route exact path="/ordering">
        <InitialPage>
          請選擇類別
        </InitialPage>
      </Route>
      {menu.map((shopsArray, index) => (<Route path={`/ordering/${shopsArray[0]}`}><MerchandiseCategory number={index} /></Route>))}
      {/* <Route path="/ordering/categoryA">
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
      </Route> */}
    </>
  );
}
