/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import * as actionCreators from '../Actions';

const MainContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  top: 90px;
  @media (max-width: 576px) {
    top: 70px;
  }
`;

const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 45%;
  height: 8rem;
  padding: 1rem;
  font-size: 1.5rem;
  border: wheat 1px solid;
  border-radius: 1rem;
  background-color: #102042;
  margin: 0 0.25rem;
  margin-bottom: 0.5rem;
  @media (max-width: 576px) {
    width: 90%;
    font-size: 1.2rem;
  }
`;

const CustomerNPay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 33%;
`;

const Customer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 65%;
  height: 100%;
  margin: 0.25rem 0;
`;

const Pay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 31px;
  background-color: ${({ green }) => (green ? '#74b476' : '#e45466')};
  color: white;
  border-radius: 1rem;
  cursor: pointer;
`;

const Merchandise = styled(Customer)`
  width: 95%;
  justify-content: center;
  color: #5cfcd1;
`;

const CustomizedDetail = styled(Customer)`
  position: absolute;
  bottom: 0.5rem;
  right: 3rem;
  height: 30%;
`;

const Change = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0.5rem;
  right: 2rem;
  width: 3rem;
  min-width: 2rem;
  height: 2rem;
  min-height: 2rem;
  color: white;
  cursor: pointer;
`;

const NotThingInCartYet = styled(ItemList)`
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;
  top: 10px;
`;

function ordersConsulting({ shoppingList, payOrNot }) {
  return (
    <MainContent>
      {
        shoppingList.length > 1
          ? shoppingList.map(
            (item, index) => (
              <ItemList key={`${item.item}${item.index}`}>
                <CustomerNPay>
                  <Customer>
                    {`訂購人：${item.customer}`}
                  </Customer>
                  {(item.color === 'red' || item.color === '')
                  && (
                  <Pay onClick={() => payOrNot(index)}>
                    {`付款：${item.isPay}`}
                  </Pay>
                  )}
                  {item.color === 'green'
                  && (
                  <Pay green onClick={() => payOrNot(index)}>
                    {`付款：${item.isPay}`}
                  </Pay>
                  )}
                </CustomerNPay>
                <Merchandise>
                  {`${item.item}(${item.size ? item.size : '>_0'}) X ${item.numbers} $${item.price * item.numbers}`}
                </Merchandise>
                <CustomizedDetail>
                  {`${item.sugar}/${item.ice}/${item.detail}`}
                </CustomizedDetail>
              </ItemList>
            ),
          ).slice(1)
          : (
            <NotThingInCartYet>
              還沒有點東西喔
            </NotThingInCartYet>
          )
      }
    </MainContent>
  );
}

const mapStateToProps = (state) => ({ shoppingList: state.shoppingList });

export default connect(mapStateToProps, actionCreators)(ordersConsulting);
