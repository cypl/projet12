import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Displays a title
 * @param {object} props - The props object containing the following properties:
 * @param {string} props.text - The text of the Title component.
 * @returns {JSX.Element} - The JSX markup for the Title component.
 */
function Title({ text }) {
  return <PageTitle>{text}</PageTitle>
}

export default Title

Title.propTypes = {
  text: PropTypes.string,
}

const PageTitle = styled.h1`
  text-align: center;
  font-size: 70px;
  letter-spacing: -3px;
  line-height: 1;
  padding-bottom: 20px;
  font-weight: 400;
  color: #e60000;
`
