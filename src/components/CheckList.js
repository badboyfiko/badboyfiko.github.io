import React from 'react'
import {Row, Cell} from './layout'
import styled, {css} from 'styled-components'
import {fontSize} from 'styled-system'

const Option = styled.p`
  position: absolute;
  display: block;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);
  color: ${props => props.theme.colors.darkBlue};
  font-weight: 700;
  margin: 0;
  line-height: 1;
  ${fontSize}
`

const Box = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: white;
  box-shadow: 0 0 5px 0 #A2AEB7;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.green};
    ${Option} {
      color: white;
    }
  }
  &:active {
    transform: scale(0.99);
    box-shadow: none;
  }
  ${props => props.selected && css`
    background-color: ${props => props.theme.colors.green};
    ${Option} {
      color: white;
    }
  `}
`

const CheckList = ({items, onChange, selected}) => <Row style={{width: '100%'}} justifyContent="center">
    {items.map(item => (
        <Cell key={item} width={1/3}>
            <Box selected={item === selected} onClick={() => onChange(item)}>
                <Option fontSize={[12, 16]}>{item}</Option>
            </Box>
        </Cell>
    ))}
</Row>

export default CheckList
