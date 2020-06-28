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
  background-color: #243155;
  border: 3px solid whitesmoke;
  border-radius: 1rem;
  @media (max-width: 576px) {
    margin: 0;
  }
`;

const Category = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  min-width: 20%;
  height: 100%;
  border-radius: 1rem;
  color: lightblue;
  font-size: 1.5rem;
  text-decoration: none;
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
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  flex-wrap: wrap;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid wheat;
  border-radius: 1rem;
  background-color: #102042;
  overflow: scroll;
  @media (max-width: 576px) {
    width: 100%;
    margin: 1rem 0.5rem;
  }
`;

// const OptionOfShops = styled(Link)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 20%;
//   min-width: 20%;
//   height: 8rem;
//   margin: 0.1rem;
//   background-color: #4a66a3;
//   border-bottom: 12px solid #223052;
//   border-left: 1px solid #223052;
//   border-right: 1px solid #aaaaaa55;
//   border-top: 1px solid #aaaaaa55;
//   border-radius: 1rem;
//   color: lightblue;
//   text-decoration: none;
//   z-index: 1;
//   &:hover{
//     transform: translate(0, 4px);
//     border-left: 5px solid #0f1832;
//     border-right: 5px solid #0f1832;
//     border-top: 8px solid #0f1832;
//     border-bottom: 1px solid #0f1832;
//     /* box-shadow: 0 -5px 5px white; */
//     transition: transform 0.8s, border 0.4s, color 0.4s;
//     color: #71b5cc77;
//     z-index: 0;
//   }
//   @media (max-width: 576px) {
//     min-width: 30%;
//   }
// `;

const OptionOfShops = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 20%;
  min-width: 100px;
  height: 3rem;
  margin: 1rem;
  padding-left: 0.5rem;
  border-bottom: 1px solid wheat;
  border-radius: 0 0 0 1rem;
  text-decoration: none;
  color: lightcyan;
  &:visited {
    color: lightcyan;
  }
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 0 2px 2px wheat;
  }
`;


export default function merchandiseList() {
  return (
    <>
      <Route exact path="/ordering">
        <InitialPage>
          {menu.map((shopsArray) => (
            <OptionOfShops
              key={`OptionOfShops_${shopsArray[0]}`}
              to={`/ordering/${shopsArray[0]}`}
            >
              {shopsArray[0]}
            </OptionOfShops>
          ))}
        </InitialPage>
      </Route>
      {menu.map((shopsArray, index) => (
        <Route
          key={`MerchandiseCategory_${shopsArray[0]}`}
          path={`/ordering/${shopsArray[0]}`}
        >
          <NavLink>
            {menu.map((shops) => (
              <Category
                key={`Category_${shops[0]}`}
                to={`/ordering/${shops[0]}`}
              >
                {shops[0]}
              </Category>
            ))}
          </NavLink>
          <MerchandiseCategory number={index} />
        </Route>
      ))}
    </>
  );
}
