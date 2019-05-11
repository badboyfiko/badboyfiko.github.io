import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from './assets/ico_ui_arrow.svg';

const StyledArrow = styled(Arrow)`
  pointer-events: none;
  user-select: none;
  position: absolute;
  right: 20px;
  top: 22px;
  fill: ${props => props.theme.colors.grey};
  width: 15px;
  height: 15px;
`

const Wrapper = styled.div`
  max-width: 100%;
  position: relative;
  &:hover {
    ${StyledArrow} {
      fill: ${props => props.theme.colors.darkBlue};
    }
  }
`

const StyledSelect = styled.select`
  height: 60px;
  font-size: 14px;
  color: ${props => props.theme.colors.darkBlue};
  max-width: 100%;
  border: 1px solid ${props => props.theme.colors.grey};
  padding-left: 20px;
  padding-right: 50px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:hover, &:active {
    border-color: ${props => props.theme.colors.darkBlue};
  }
  &::-ms-expand { 
    display: none;
  }
`

const Select = ({items, ...props}) => (
    <Wrapper fill>
        <StyledSelect {...props}>
            <option style={{display: 'none'}} disabled selected value>Vyberte politickú stranu zo zoznamu</option>
            {items.map(item => <option value={item}>{item}</option>)}
        </StyledSelect>
        <StyledArrow />
    </Wrapper>
)

export default Select
