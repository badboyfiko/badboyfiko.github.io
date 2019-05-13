import React from 'react'
import {Container, Column} from './layout'
import styled from 'styled-components'
import {space} from 'styled-system'

export const Title = styled.h1`
  color: ${props => props.theme.colors.darkBlue};
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  ${space}
`

const StyledColumn = styled(Column)`
  @media (max-height: 650px) {
    padding-bottom: 50px;
  }
`

const Question = ({index, title, middlePart, bottomPart, height}) => (
    <Container style={{height: Math.max(height, 520)}}>
        <StyledColumn height="100%" alignItems="center" justifyContent="center">
            <Title>{title}</Title>
            <Column alignItems="center" style={{width: '100%', maxWidth: 500}} my={20}>
                {middlePart}
            </Column>
            {bottomPart}
        </StyledColumn>
    </Container>
)

export default Question
