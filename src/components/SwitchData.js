import styled from 'styled-components'

const SwitchWrapper = styled.div`
  width: 80px;
  height: 50px;
  position: absolute;
  outline: 1px solid #ededed;
  border-radius: 4px;
  right: 0;
  top: 50%;
  margin-top: -25px;
  overflow: hidden;
`
const SwitchSource = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 25px;
  background-color: #ededed;
  color: #999;
  font-size: 10px;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
`
const SourceMock = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  left: 0;
  background-color: #ededed;
  cursor: pointer;
  &.active {
    background-color: #e60000;
    color: #fff;
  }
`
const SourceBack = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  right: 0;
  background-color: #ededed;
  cursor: pointer;
  &.active {
    background-color: #e60000;
    color: #fff;
  }
`
const SwitchUser = styled.div`
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
  color: #999;
  font-size: 10px;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  & svg {
    display: inline;
    height: 10px;
    width: auto;
    vertical-align: -1px;
    margin-right: 2px;
  }
  & svg path {
    fill: #e60000;
  }
`

function SwitchData({
  switchMockSource,
  switchBackSource,
  switchUser,
  dataSource,
}) {
  return (
    <SwitchWrapper>
      <SwitchSource>
        <SourceMock
          onClick={switchMockSource}
          className={dataSource === 'MOCK' && 'active'}
        >
          Mock
        </SourceMock>
        <SourceBack
          onClick={switchBackSource}
          className={dataSource === 'BACK' && 'active'}
        >
          Back
        </SourceBack>
      </SwitchSource>
      <SwitchUser onClick={switchUser}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z" />
        </svg>{' '}
        user
      </SwitchUser>
    </SwitchWrapper>
  )
}

export default SwitchData
