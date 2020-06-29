import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const InitialPage = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  top: 90px;
  position: relative;
  width: 90%;
  max-width: 600px;
  height: 200px;
  padding: 0.25rem;
  border: 1px solid wheat;
  border-radius: 1rem;
  background-color: #102042;
  font-size: 2rem;
  color: wheat;
  text-decoration: none;
  &:visited {
    color: wheat;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin: 1rem 0.5rem;
    width: 90%;
  }
`;

export default function () {
  return (
    <InitialPage to="/ordering">
      今天想吃/喝什麼？
    </InitialPage>
  );
}
