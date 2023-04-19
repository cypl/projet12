import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconNavBox = styled.li`
  position: relative;
  width: 64px;
  height: 64px;
  background-color: #020203;
  border-radius: 6px;
  background-color: #fff;
  margin: 20px 0;
`
const IconFig = styled.figure`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 12px;
  left: 12px;
`
const IconImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`

function IconNav({ iconSrc, iconAlt }) {
  return (
    <IconNavBox>
      <IconFig>
        <IconImg src={iconSrc} alt={iconAlt}></IconImg>
      </IconFig>
    </IconNavBox>
  )
}

IconNav.propTypes = {
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
}

export default IconNav
