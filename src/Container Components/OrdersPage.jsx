/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import MerchandiseList from '../Presentationl Components/MerchandiseList';
import ShoppingCart from './shoppingCart';
import * as actionCreators from '../Actions';

const MainContent = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  top: 90px;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    top: 70px;
    margin-bottom: 4rem;
  }
`;

const MiddleContent = styled.div`
  display: flex;
  width: 77%;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const SideContent = styled.aside`
  display: flex;
  width: 23%;
  min-width: 250px;
  max-width: 300px;
  @media (max-width: 576px) {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    min-width: 100%;
    max-width: 100%;
    top: 0;
    background-color: #ffffff33;
    justify-content: center;
    display: ${({ phone }) => (phone ? 'flex' : 'none')}
  }
`;

const PhoneSizeBottomDecoration = styled.footer`
  display: none;
  @media (max-width: 576px){
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    bottom: 0;
    z-index: 1;
    background-color: #223052;
    background-color: #102042;
    height: 3.5rem;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    border: wheat 1px solid;
    border-bottom: 0;
    border-right: 0;
    border-left: 0;
  }
`;

const PhoneSizeCart = styled.div`
  @media (max-width: 576px){
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    background-color: #223052;
    bottom: 1rem;
    left: 0.25rem;
    border-radius: 0.5rem;
    border: wheat 1px solid;
    font-size: 1.75rem;
  }
`;

function ordersPage({ shoppingList, phoneSizeCart }) {
  return (
    <MainContent>
      <MiddleContent>
        <MerchandiseList />
      </MiddleContent>
      <SideContent phone={shoppingList[0].phone}>
        <ShoppingCart />
      </SideContent>
      <PhoneSizeBottomDecoration>
        <PhoneSizeCart onClick={phoneSizeCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </PhoneSizeCart>
      </PhoneSizeBottomDecoration>
    </MainContent>
  );
}

const mapStateToProps = (state) => ({ shoppingList: state.shoppingList });

export default connect(mapStateToProps, actionCreators)(ordersPage);
