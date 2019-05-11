import React, {Fragment} from 'react'
import {Row, Cell, Flex} from './layout'
import styled, {css} from 'styled-components'
import {fontSize} from 'styled-system'

const Option = styled.p`
  color: ${props => props.theme.colors.darkBlue};
  margin: 0;
  line-height: 1.2;
  text-align: left;
  ${fontSize}
`

const CheckBox = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  border: 2px solid ${props => props.theme.colors.green};
  margin-right: 10px;
  flex-shrink: 0;
  ${props => props.selected && css`
    background-color: ${props => props.theme.colors.green};
  `}
  &::after {
    position: absolute;
    top: 3px;
    left: 6px;
    content: '';
    line-height: 1;
    color: white;
    font-size: 14px;
    font-weight: bold;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    height: 10px;
    width: 5px;
    transform: rotate(45deg);
  }
`

const OptionWrapper = styled(Flex).attrs(() => ({height: 40, alignItems: 'center'}))`
  cursor: pointer;
`

const CheckList = ({items, selected, onChange, numbers}) => <Row style={{width: '100%'}} justifyContent="center">
    <Cell>
        {items.slice(0, 7).map((item, i) => (
            <OptionWrapper onClick={() => onChange(item)}>
                <CheckBox selected={selected.indexOf(item) !== -1} />
                {numbers &&
                    <Fragment>
                        <Option fontSize={[12, 14]}>{i + 1}.</Option>
                        &nbsp;
                    </Fragment>
                }
                <Option fontSize={[12, 14]}>{item}</Option>
            </OptionWrapper>
        ))}
    </Cell>
    {items.length > 7 &&
        <Cell>
            {items.slice(7, 14).map((item, i) => (
                <OptionWrapper onClick={() => onChange(item)}>
                    <CheckBox selected={selected.indexOf(item) !== -1} />
                    {numbers &&
                    <Fragment>
                        <Option fontSize={[12, 14]}>{i + 8}.</Option>
                        &nbsp;
                    </Fragment>
                    }
                    <Option fontSize={[12, 14]}>{item}</Option>
                </OptionWrapper>
            ))}
        </Cell>
    }
</Row>

export default CheckList
