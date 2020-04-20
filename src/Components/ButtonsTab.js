import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`

const Button = styled.button`
  color: white;
  background-color: ${props => props.type === "draw" ? "green" : "blue"};
  padding: 16px 8px;
  border: 3px solid violet;
  border-radius: 4px;
  min-width: 60px;
`

const ButtonsTab = ({onDraw, onReset}) => (
    <ButtonWrapper>
        <Button name="draw" onClick={onDraw} type="draw">Draw</Button>
        <Button name="up" onClick={onReset}>Reset</Button>
    </ButtonWrapper>
)

export default ButtonsTab;
