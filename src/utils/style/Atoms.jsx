import { Link } from 'react-router-dom'
import colors from './colors'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 2px solid #FF3D00;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;

&:after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 4px;
  top: 4px;
  border: 2px solid #2C2BFF;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
`
export const LoaderWrapper = styled.div`
  // height:100%;
  // width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`