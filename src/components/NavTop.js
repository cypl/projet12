import styled from 'styled-components'

const NavTopContainer = styled.header`
  position: absolute;
  width: 100%;
  height: 90px;
  left: 0;
  top: 0;
  background-color: #020203;
  z-index: 1;
  box-shadow: 0px 4px 4px 0px #00000040;
`

function NavTop() {
  return <NavTopContainer></NavTopContainer>
}

export default NavTop
