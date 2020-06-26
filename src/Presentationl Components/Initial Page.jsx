import React from 'react';
import styled from '@emotion/styled';

const InitialPage = styled.div`
  display: flex;
  width: 90%;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 2rem;
  padding: 0.25rem;
  border: 1px solid wheat;
  border-radius: 1rem;
  background-color: #102042;
  top: 90px;
  position: relative;
  @media (max-width: 576px) {
    width: 100%;
    margin: 1rem 0.5rem;
  }
`;

export default function () {
  return (
    <InitialPage>
      今天想吃/喝什麼？
    </InitialPage>
  );
}
