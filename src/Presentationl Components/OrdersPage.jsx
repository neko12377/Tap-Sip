import React from 'react';
import styled from '@emotion/styled';
import MerchandiseList from './MerchandiseList';
import ShoppingCart from '../Container Components/shoppingCart';

const MainContent = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MiddleContent = styled.div`
  display: flex;
  width: 77%;
  flex-direction: column;
`;

const SideContent = styled.aside`
  display: flex;
  width: 23%;
  min-width: 250px;
  max-width: 300px;
`;

export default function () {
  return (
    <MainContent>
      <MiddleContent>
        <MerchandiseList />
      </MiddleContent>
      <SideContent>
        <ShoppingCart />
      </SideContent>
    </MainContent>
  );
}
