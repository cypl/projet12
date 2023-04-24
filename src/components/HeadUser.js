import styled from 'styled-components'

const HeadingUser = styled.header`
  position: absolute;
  width: 90%;
  max-width: 1100px;
  left: 50%;
  transform: translate(-50%, 0);
  height: 150px;
  background: #888;
  @media (max-width: 1024px) {
    width: calc(100% - 60px);
  }
`

function HeadUser({ firstName }) {
  return (
    <HeadingUser>
      <p>{firstName}</p>
    </HeadingUser>
  )
}

export default HeadUser
