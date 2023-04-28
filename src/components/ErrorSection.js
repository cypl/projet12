import styled from 'styled-components'
import Title from './Title'
import BtnTxt from './BtnText'

const Main = styled.main`
  position: absolute;
  top: 90px;
  left: 110px;
  width: calc(100% - 110px);
  height: calc(100% - 90px);
`
const ErrorSectionWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ErrorContainer = styled.article`
  width: 95%;
`
const ErrorText = styled.p`
  text-align: center;
`

function ErrorSection({ title, errorText, btnText, btnTarget }) {
  return (
    <Main>
      <ErrorSectionWrapper>
        <ErrorContainer>
          <Title text={title} />
          <ErrorText>
            {errorText} <br />
            <BtnTxt text={btnText} target={btnTarget} />
          </ErrorText>
        </ErrorContainer>
      </ErrorSectionWrapper>
    </Main>
  )
}

export default ErrorSection
