/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

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
const Customer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 33%;
`;

const Merchandise = styled(Customer)`
  color: #5cfcd1;
`;

const CustomizedDetail = styled(Customer)`
`;

function ordersConsulting({ shoppingList }) {
  return (
    <MainContent>
      {
        shoppingList.map(
          (item) => (
            <ItemList key={`${item.item}${item.index}`}>
              <Customer>
                {`訂購人：${item.customer} 付款： ${item.isPay}`}
              </Customer>
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

export default connect(mapStateToProps)(ordersConsulting);
