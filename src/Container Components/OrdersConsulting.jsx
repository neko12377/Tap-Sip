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
`;

const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 8rem;
  padding: 1rem;
  font-size: 1.5rem;
  border: wheat 1px solid;
  border-radius: 1rem;
  background-color: #102042;
`;

const CustomerNPay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 33%;
`;

const Customer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const Pay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  background-color: ${({ green }) => (green ? '#74b476' : '#e45466')};
  color: white;
  border-radius: 1rem;
  cursor: pointer;
`;

const Merchandise = styled(Customer)`
  color: #5cfcd1;
`;

const CustomizedDetail = styled(Customer)`
`;

function ordersConsulting({ shoppingList, payOrNot }) {
  return (
    <MainContent>
      {
        shoppingList.map(
          (item, index) => (
            <ItemList key={`${item.item}${item.index}`}>
              <CustomerNPay>
                <Customer>
                  {`訂購人：${item.customer}`}
                </Customer>
                {item.color === 'red'
                && (
                <Pay onClick={() => payOrNot(index)}>
                  {`付款：${item.isPay}`}
                </Pay>
                )}
                { item.color === 'green'
                && (
                <Pay green onClick={() => payOrNot(index)}>
                  {`付款：${item.isPay}`}
                </Pay>
                )}
              </CustomerNPay>
              <Merchandise>
                {`${item.item} $${item.price}`}
              </Merchandise>
              <CustomizedDetail>
                {`${item.detail}`}
              </CustomizedDetail>
            </ItemList>
          ),
        ).slice(1)
      }
    </MainContent>
  );
}

const mapStateToProps = (state) => ({ shoppingList: state.shoppingList });

export default connect(mapStateToProps, actionCreators)(ordersConsulting);
