/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React, { useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import * as actionCreators from '../Actions';

const AnnotationBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 2rem;
  border: 1px solid wheat;
  border-radius: 1rem;
  background-color: #11111188;
  z-index: 3;
`;

const Annotation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 800px;
  height: 500px;
  min-width: 800px;
  background-color: #243150;
  border-radius: 1rem;
  border: 1px solid wheat;
  @media (max-width: 576px) {
    min-width: 320px;
  }
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  @media (max-width: 576px) {
    flex-direction: column;
    height: 80%;
  }
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
  border-right: solid 1px wheat;
  @media (max-width: 576px) {
    width: 100%;
    border-right: 0;
    border-bottom: solid wheat 1px;
    height: 55%;
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 60%;
  border-radius: 1rem;
  border: solid wheat 1px;
  margin-bottom: 2%;
  font-size: 1.25rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20%;
  background-color: #102042;
  border-radius: 0.5rem;
  border: solid wheat 1px;
  font-size: 1.2rem;
  @media (max-width: 576px) {
    height: 30%;
  }
`;

const CustomerInfo = styled(Introduction)`
  width: 55%;
  border: none;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 2%;
  overflow: scroll;
  @media (max-width: 576px) {
    width: 100%;
    height: 173px;
    min-width: 173px;
    border-right: 0;
    border-bottom: 0;
  }
`;

const SugarBox = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */
  width: 100%;
  /* height: 100%; */
  margin-bottom: 1rem;
`;

const SNITitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 50px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
  border-bottom: 1px solid white;
  border-radius: 0 0 0 1rem;
  font-size: 1.25rem;
`;

const SugarChoices = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Sugar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.6%;
  height: 70px;
  margin-bottom: 0.25rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: royalblue 0 6px 6px;
  }
`;

const Ice = styled(Sugar)`
  width: 20%;
`;

const InfoColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 15%;
  min-height: 15%;
  padding-left: 2%;
  margin-bottom: 2%;
  border-radius: 1rem;
  border: solid 1px wheat;
  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    width: 25%;
    height: 100%;
    margin: 0;
    padding: 0;
    padding-right: 2%;
  };
  @media (max-width: 576px) {
    min-height: 25%;
    & p {
      font-size: 0.8rem;
    }
  }
`;

const Customization = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
  width: 60%;
  height: 70%;
  margin: 0;
  padding: 1px 0.5rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  &::placeholder {
    font-size: 1rem;
    color: #22222250;
  }
`;

const Radio = styled.input`
  width: 1.5rem;
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 15%;
  border-top: 1px solid wheat;
  padding: 0.5rem;
  @media (max-width: 576px) {
    flex-direction: column;
    height: 20%;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
  @media (max-width: 576px) {
    width: 100%;
    height: 50%;
  }
`;

const FooterRight = styled.div`
  display: flex;
  width: 55%;
  height: 100%;
  padding-left: 1%;
  align-items: center;
  @media (max-width: 576px) {
    width: 100%;
    height: 50%;
  }
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 80%;
  background-color: whitesmoke;
  border-radius: 0.5rem;
`;

const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  border-radius: 1rem 0.5rem 0.5rem 1rem;
  background-color: royalblue;
  font-size: 2rem;
  cursor: pointer;
`;

const Minus = styled(Plus)`
  border-radius: 0.5rem 1rem 1rem 0.5rem;
`;

const Number = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  margin: 0 1%;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  background-color: whitesmoke;
  padding-left: 2rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  margin: 0 2%;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: white;
`;

const PutInCart = styled(Button)`
  width: 70%;
  background-color: #94d486;
`;

const GoBack = styled(Button)`
  width: 28%;
  background-color: #e45466;
`;

const sugarList = ['無糖', '微糖', '少糖', '半糖', '8分糖', '全糖'];
const iceList = ['完全去冰', '去冰', '微冰', '少冰', '正常冰'];

function annotation({
  addItem, goback, shoppingList, temporariness,
  itemNumbers, customerName, customizedDetail, pay, sumOfItems,
  alterSugar, alterIce,
}) {
  function ordered(name, size, price, sugar, ice, numbers, customer, detail, isPay, color) {
    addItem(name, size, price, sugar, ice, numbers, customer, detail, isPay, color);
  }

  const sumArray = shoppingList.map((item, index) => index > 0
    && parseInt(item.numbers, 10)).slice(1);
  const sum = sumArray.reduce(((pre, cur) => pre + cur), 0);

  function plus(cur) {
    let currentValue = cur;
    currentValue += 1;
    itemNumbers(currentValue);
  }

  function minus(cur) {
    let currentValue = cur;
    currentValue = cur > 0
      ? currentValue -= 1
      : cur;
    itemNumbers(currentValue);
  }

  // eslint-disable-next-line no-unused-vars
  function handleChange(number) {
    // eslint-disable-next-line no-param-reassign
    number = (number)
      ? itemNumbers(parseInt(number, 10))
      : 0;
  }

  const [name, size, price] = shoppingList[0].temp;
  const {
    numbers, customer, detail, isPay, color, sugar, ice,
  } = shoppingList[0];


  const Option = useCallback(() => {
    const amount = 31;
    const option = [];
    for (let i = 1; i < amount; i += 1) {
      option.push((<option value={i} key={i} />));
    }
    return option;
  });

  useEffect(() => {
    document.getElementById('number').value = numbers;
  }, [Option, numbers]);

  return (
    <AnnotationBlock>
      <Annotation>
        <Main>
          <Introduction>
            <Image>
              暫無圖片test
            </Image>
            <Description>
              {`${name}(${size}) $ ${price}`}
              <br />
              {`${shoppingList[0].sugar}/${shoppingList[0].ice}`}
            </Description>
          </Introduction>
          <CustomerInfo>
            <SugarBox>
              <SNITitle>
                甜度
              </SNITitle>
              <SugarChoices>
                {sugarList.map(
                  (sugarCategory, index) => {
                    const sIndex = index;
                    return (
                      <Sugar
                        key={`${sugarCategory}${sIndex}`}
                        onClick={() => alterSugar(sugarCategory)}
                      >
                        {sugarCategory}
                      </Sugar>
                    );
                  },
                )}
              </SugarChoices>
            </SugarBox>
            <SugarBox>
              <SNITitle>
                冰塊
              </SNITitle>
              <SugarChoices>
                {iceList.map(
                  (iceCategory, index) => {
                    const iIndex = index;
                    return (
                      <Ice
                        key={`${iceCategory}${iIndex}`}
                        onClick={() => alterIce(iceCategory)}
                      >
                        {iceCategory}
                      </Ice>
                    );
                  },
                )}
              </SugarChoices>
            </SugarBox>
            <InfoColumn>
              <p>訂購人</p>
              <Customization placeholder="Name" onChange={(e) => customerName(e.target.value)} />
            </InfoColumn>
            <InfoColumn>
              <p>訂購細項</p>
              <Customization placeholder="Csutomized Detail" onChange={(e) => customizedDetail(e.target.value)} />
            </InfoColumn>
            <InfoColumn>
              <p>是否付款</p>
              <Radio type="radio" id="Yes" name="paidOrNot" value="是" onChange={(e) => pay(e.target.value, 'green')} />
              <label htmlFor="Yes">是</label>
              <Radio type="radio" id="No" name="paidOrNot" value="否" onChange={(e) => pay(e.target.value, 'red')} />
              <label htmlFor="No">否</label>
            </InfoColumn>
          </CustomerInfo>
        </Main>
        <Footer>
          <FooterLeft>
            <Counter>
              <Minus
                onClick={() => minus(numbers)}
              >
                -
              </Minus>
              <Number
                list="counterList"
                onChange={(event) => handleChange(event.target.value)}
                id="number"
                value={numbers}
              />
              <datalist id="counterList">
                <Option />
              </datalist>
              <Plus
                onClick={() => plus(numbers)}
              >
                +
              </Plus>
            </Counter>
          </FooterLeft>
          <FooterRight>
            <PutInCart
              onClick={() => {
                ordered(
                  name, size, price, sugar, ice, numbers,
                  customer, detail, isPay, color,
                );
                goback(false);
                temporariness('', '', '');
                customerName('');
                customizedDetail('');
                pay('', '');
                sumOfItems(sum, numbers);
                alterSugar('');
                alterIce('');
              }}
            >
              加入購物車
            </PutInCart>
            <GoBack
              onClick={() => {
                goback(false);
                temporariness('', '', '');
                itemNumbers(0);
                customerName('');
                customizedDetail('');
                pay('', '');
              }}
            >
              返回
            </GoBack>
          </FooterRight>
        </Footer>
      </Annotation>
    </AnnotationBlock>
  );
}

const mapStateToProps = (state) => ({ shoppingList: state.shoppingList });

export default connect(mapStateToProps, actionCreators)(annotation);
