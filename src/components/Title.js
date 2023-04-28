import styled from 'styled-components'

const PageTitle = styled.h1`
  text-align: center;
  font-size: 70px;
  letter-spacing: -3px;
  line-height: 1;
  padding-bottom: 20px;
  font-weight: 400;
  color: #e60000;
`

function Title({ text }) {
  return <PageTitle>{text}</PageTitle>
}

export default Title
