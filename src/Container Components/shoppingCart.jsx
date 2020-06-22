/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import * as actionCreators from '../Actions';

const Background = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 500px;
  max-height: 500px;
  border: 2px solid #e8eff0;
  flex-wrap: wrap;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10%;
  max-height: 100px;
`;

const TitleContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-bottom: solid 4px #e8eff0;
  border-radius: 8px;
`;

const basicButton = styled.button`
  display: flex;
  width: 45%;
  height: 2rem;
  min-height: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: whitesmoke;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
`;

const MainContent = styled.div`
  width: 80%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  overflow: scroll;
  border-bottom: solid 4px #e8eff0;
  border-radius: 8px;
`;

const OrderedItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  margin-bottom: 0.5rem;
`;

const OrderedItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50px;
  min-height: 50px;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const TrashCan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  background-color: #e45466;
  border-radius: 0.5rem;
  color: whitesmoke;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #ff5466;
  }
`;

const ItemPrice = styled(ItemContent)`
  justify-content: center;
`;

const ConfirmOrders = styled(Link)`
  display: flex;
  width: 45%;
  height: 2rem;
  min-height: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: whitesmoke;
  font-size: 1rem;
  outline: none;
  border: none;
  background-color: royalblue;
  text-decoration: none;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
`;

const SumSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 60%;
`;

const SumContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.5rem;
`;

const CleanAll = styled(basicButton)`
  background-color: #ff5466;
  color: white;
`;

function shoppingCart({ shoppingList, delAllItem, confirmOrders, deleteThisItem }) {
  function del() {
    delAllItem();
  }

  const itemAmount = shoppingList.map(
    (listItem, index) => index > 0 && parseInt(listItem.numbers, 10),
  ).slice(1);

  const priceList = shoppingList.map(
    (listItem, index) => index > 0 && listItem.price * listItem.numbers,
  ).slice(1);

  const accumulator = (pre, cur) => pre + cur;
  const sum = [itemAmount.reduce(accumulator, 0), priceList.reduce(accumulator, 0)];

  return (
    <Background>
      <Cart>
        <Title>
          <TitleContent>
            Cart
          </TitleContent>
        </Title>
        <MainContent>
          <OrderedItemList>
            {shoppingList.map((listItem, index) => (
              listItem.index !== 0 && listItem.numbers !== 0 && (
                <OrderedItem key={`orderedItem${listItem.index}`}>
                  <ItemContent>
                    {`${listItem.item}`}
                    <TrashCan title="刪除此項" onClick={() => deleteThisItem(index)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </TrashCan>
                  </ItemContent>
                  <ItemPrice>
                    {`$ ${listItem.price} X ${listItem.numbers}`}
                  </ItemPrice>
                </OrderedItem>
              )
            ))}
          </OrderedItemList>
          <ConfirmOrders
            onClick={confirmOrders}
            to={shoppingList.length > 1 ? '/ordersconsulting' : '#'}
          >
            訂單確認
          </ConfirmOrders>
        </MainContent>
        <Footer>
          <SumSection>
            <SumContent>
              {`品項數: ${sum[0]}個`}
            </SumContent>
            <SumContent>
              {`小計: ${sum[1]}元`}
            </SumContent>
            <SumContent>
              {`總額: ${sum[1]}元`}
            </SumContent>
          </SumSection>
          <CleanAll
            onClick={del}
            type="button"
          >
            清空購物車
          </CleanAll>
        </Footer>
      </Cart>
    </Background>
  );
}

const mapStateToProps = (state) => ({ shoppingList: state.shoppingList });

export default connect(mapStateToProps, actionCreators)(shoppingCart);
