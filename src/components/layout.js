import React from 'react'
import styled from 'styled-components'
import { Flex as GridFlex, Box as GridBox } from '@rebass/grid'
import {height, flex} from 'styled-system'

export const Flex = styled(({fill, ...props}) => <GridFlex {...props} />)`
  ${height}
  ${flex}
  ${props => props.fill && `flex: 1;`}
`

export const Div = (props) => <GridBox {...props} />
export const Column = (props) => <Flex flexDirection="column"  {...props} />

export const Row = (props) => <Flex mx={[-10, -15]} {...props} />
export const Cell = (props) => <GridBox p={[10, 15]} {...props} />

export const Container = (props) => <Div m="0 auto" p={20} width="100%" {...props} />
