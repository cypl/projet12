import styled from 'styled-components'
import PropTypes from 'prop-types'
import Title from './Title'
import BtnTxt from './BtnText'

/**
 * Displays the section for Error404 or InProgress pages.
 * @param {object} props - The props object containing the following properties:
 * @param {string}  props.title - The title of the error.
 * @param {string}  props.errorText - The text describing the error.
 * @param {string}  props.btnText - The text of the button.
 * @param {string}  props.btnTarget - The target (route) of the button.
 * @returns {JSX.Element} - The JSX markup for the ErrorSection component.
 */
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

ErrorSection.propTypes = {
  title: PropTypes.string,
  errorText: PropTypes.string,
  btnText: PropTypes.string,
  btnTarget: PropTypes.string,
}

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
