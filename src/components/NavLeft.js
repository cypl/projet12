import styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { IconMeditation } from '../utils/icons'
import { IconCyclisme } from '../utils/icons'
import { IconNatation } from '../utils/icons'
import { IconMusculation } from '../utils/icons'

const NavLeftContainer = styled.footer`
  position: absolute;
  width: 110px;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #020203;
`
const NavLeftIcons = styled.ul`
  width: 64px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 27px;
  transform: translate(0%, -50%);
`
const IconNavBox = styled.li`
  width: 64px;
  height: 64px;
  border-radius: 6px;
  margin: 20px 0;
  overflow: hidden;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 64px;
    height: 64px;
    background-color: #fff;
    transition: 0.1s background-color ease-in-out;
  }
  & a:hover {
    background-color: #ffc5c5;
    transition: 0.1s background-color ease-in-out;
  }
  & a.active {
    background-color: #ffc5c5;
  }
`
const Copyright = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500px;
  transform: rotate(270deg);
  position: absolute;
  bottom: 87px;
  left: -15px;
  white-space: nowrap;
`
const NavLinkLeft = ({ path, icon }) => (
  <IconNavBox>
    <NavLink to={path}>{icon}</NavLink>
  </IconNavBox>
)
NavLinkLeft.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.object,
}

function NavLeft() {
  const iconsList = [
    {
      path: '/yoga',
      icon: <IconMeditation color={'#e60000'} />,
    },
    {
      path: '/natation',
      icon: <IconNatation color={'#e60000'} />,
    },
    {
      path: '/cyclisme',
      icon: <IconCyclisme color={'#e60000'} />,
    },
    {
      path: '/musculation',
      icon: <IconMusculation color={'#e60000'} />,
    },
  ]

  return (
    <NavLeftContainer className="navleft">
      <NavLeftIcons>
        {iconsList.map((i, index) => (
          <NavLinkLeft path={i.path} icon={i.icon} key={index} />
        ))}
      </NavLeftIcons>
      <Copyright>Copyright, SportSee 2023</Copyright>
    </NavLeftContainer>
  )
}
export default NavLeft
