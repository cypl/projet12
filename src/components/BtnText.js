import styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

/**
 * Display a button as an inline text.
 * @param {object} props - The props object containing the following properties:
 * @param {string}  props.text - The text of the button.
 * @param {string}  props.target - The target (route) of the button.
 * @returns {JSX.Element} - The JSX markup for the BtnTxt component.
 */
function BtnTxt({ text, target }) {
  return <Btn to={target}>{text}</Btn>
}

export default BtnTxt

BtnTxt.propTypes = {
  text: PropTypes.string,
  target: PropTypes.string,
}

const Btn = styled(NavLink)`
  display: inline-block;
  padding: 15px 20px;
  margin-top: 30px;
  font-size: 12px;
  line-height: 1;
  background-color: #ffc5c5;
  color: #e60000;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: 0.05s color ease-in-out, 0.1s background-color ease-in-out;
  &:hover {
    background-color: #e60000;
    color: #fff;
    transition: 0.05s color ease-in-out, 0.1s background-color ease-in-out;
  }
`
