/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import * as actionCreators from '../Actions';
import Annotation from './annotation';
import menu from '../menu/menu.json';

const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
  padding: 0.5rem 0 0.5rem 0 ;
  justify-content: center;
`;

const ItemCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 3rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid wheat;
  border-radius: 1rem;
  overflow: scroll;
`;

const Categories = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
  text-decoration: none;
  color: lightblue;
  font-size: 18px;
  &:visited {
    color: lightblue;
  }
  &:hover {
    background-color: #102042;
    border-radius: 1rem;
    color: wheat;
  }
  @media (max-width: 576px) {
    min-width: 33%;
  }
`;

const ItemsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 200px;
  min-width: 200px;
  height: 250px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin: 0.25rem;
  border: solid 1px wheat;
  border-radius: 1rem;
  background-color: #102042;
  font-size: 1.2rem;
  cursor: pointer;
  & input {
    width: 50%;
  }
  &:hover {
    transform: translate(0, -10px);
    box-shadow: 0 5px 5px wheat;
  }
  @media (max-width: 576px) {
    max-width: 47%;
    min-width: 47%;
    height: 180px;
  }
`;

const ItemName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
`;

const ItemImage = styled(ItemName)`
  height: 50%;
  width: 90%;
  border: solid 1px wheat;
  border-radius: 1rem;
`;

const ItemDetail = styled(ItemName)`
  height: 25%;
`;

function merchandiseCategory({
  number, temporariness, itemNumbers,
}) {
  const [showAnnotationBlock, setAnnotationBlock] = useState(false);

  return (
    <ItemBlock>
      <Title>
        {menu[number][0]}
      </Title>
      <ItemCategory>
        {
          menu[number].map(
            (category, index) => index > 0
            && (
              <Categories
                key={`${category[0]}`}
                to={`/ordering/${menu[number][0]}/${category[0]}`}
              >
                {category[0]}
              </Categories>
            ),
          )
        }
      </ItemCategory>
      <ItemsBlock>
        {
          menu[number].map(
            (itemArray, index) => index > 0
            && (
              <Route
                key={`${itemArray[0]}`}
                path={`/ordering/${menu[number][0]}/${itemArray[0]}`}
              >
                {
                  itemArray.map(
                    (item, arrayIndex) => arrayIndex > 0
                    && (
                      <Items
                        key={`${item.name} ${item.size}`}
                        onClick={() => {
                          setAnnotationBlock(true);
                          temporariness(item.name, item.size, item.price);
                          itemNumbers(1);
                        }}
                      >
                        <ItemName>
                          {item.name}
                        </ItemName>
                        <ItemImage>
                          暫無圖片
                        </ItemImage>
                        <ItemDetail>
                          {`(${item.size}) ${item.price}`}
                        </ItemDetail>
                      </Items>
                    ),
                  )
                }
              </Route>
            ),
          )
        }
      </ItemsBlock>
      {
        showAnnotationBlock
        && (
          <Annotation
            goback={setAnnotationBlock}
          />
        )
      }
    </ItemBlock>
  );
}

const mapStateToProps = (state) => ({ shoppingList: state.shoppingList });

export default connect(mapStateToProps, actionCreators)(merchandiseCategory);
