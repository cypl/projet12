import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Display a spining loader.
 * @param {object} props - The props object containing the following properties:
 * @param {string} props.size - The size of the loader.
 * @param {string} props.color - The color of the loader.
 * @param {string} props.position - The position of the loader (inline or block).
 * @returns {JSX.Element} - The JSX markup for the Loader component.
 */
function Loader({ size, color, position }) {
  return (
    <LoaderWrapper
      size={size}
      color={color}
      className={position === 'inline' ? 'inline' : 'block'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
      </svg>
    </LoaderWrapper>
  )
}

export default Loader

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string,
}

const rotate = keyframes`
  from{
    transform: rotate(0deg);
    }
  to {
    transform: rotate(360deg);
  }
`
const LoaderWrapper = styled.span`
  aspect-ratio: 1/1;
  height: ${(props) => props.size || '15px'};
  &.inline {
    display: inline-block;
    vertical-align: -1px;
  }
  &.block {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  & svg {
    height: 100%;
    width: 100%;
    animation: ${rotate} 1s linear infinite;
    & path {
      fill: ${(props) => props.color || '#999'};
    }
  }
`
