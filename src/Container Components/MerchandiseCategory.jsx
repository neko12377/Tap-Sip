/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import * as actionCreators from '../Actions';
import Annotation from './annotation';
import menu from '../menu/menu.json';

const ItemBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-right: 0.5rem;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
  padding: 1rem 1rem 1rem 0;
  justify-content: center;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  min-width: 200px;
  height: 250px;
  border-radius: 1rem;
  background-color: #102042;
  border: solid 1px wheat;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  margin: 0.25rem;
  cursor: pointer;
  & input {
    width: 50%;
  }
`;

function merchandiseCategory({ number, temporariness, itemNumbers }) {
  const [showAnnotationBlock, setAnnotationBlock] = useState(false);

  return (
    <ItemBlock>
      <Title>
        {menu[number][0]}
      </Title>
      {
        menu[number].map(
          (item, index) => index > 0
          && (
            <Items
              key={item.name}
              onClick={() => {
                setAnnotationBlock(true); temporariness(item.name, item.price); itemNumbers(1);
              }}
            >
              {item.name}
            </Items>
          ),
        )
      }
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
