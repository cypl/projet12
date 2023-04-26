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
      <SwitchUser onClick={switchUser}>Switch user</SwitchUser>
    </SwitchWrapper>
  )
}

export default SwitchData
