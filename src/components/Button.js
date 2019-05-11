import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
  font-weight: bold;
  font-size: 16px;
  color: white;
  background: ${props => props.theme.colors.green};
  padding: 15px 50px;
  transition: background 250ms ease-in-out;
  cursor: pointer;
  border-radius: 200px;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  &:hover {
    background: ${props => props.theme.colors.hoverGreen};
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.99);
  }
  ${props => props.disabled && css`
    background-color: ${props => props.theme.colors.grey};
    pointer-events: none;
    color: ${props => props.theme.colors.lightGrey};
  `}
  ${props => props.loading && css`
      position: relative;
      pointer-events: none !important;
      color: transparent;
      &:before {
        content: '';
        z-index: 10;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-50%,0);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border-top: 2px solid ${props => props.theme.colors.green};
        border-bottom: 2px solid ${props => props.theme.colors.green};
        border-left: 2px solid ${props => props.theme.colors.green};
        border-right: 2px solid white;
        background-color: transparent;
        animation-name: spinCenter;
        animation-duration: 600ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        @keyframes spinCenter {
          from {transform: translate3d(-50%,-50%,0) rotate(0deg);}
          to {transform: translate3d(-50%,-50%,0) rotate(360deg);}
        }
      }
  `}
`


const Button = ({last, ...props}) => (
    <StyledButton type={last ? 'submit' : 'button'} {...props}>
        {last ? 'Odoslať' : 'Ďalšia otázka'}
    </StyledButton>
)

export default Button
