import styled from 'styled-components'

const ActivityWrapper = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  height: calc(55% - 10px);
  width: 100%;
  background: pink;
  border-radius: 5px;
`

function ActivityGraph() {
  return <ActivityWrapper></ActivityWrapper>
}
export default ActivityGraph
