import styled from 'styled-components'

const Infos = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  height: calc(45% - 10px);
  width: 100%;
`
const InfosItem = styled.div`
  position: relative;
  height: 100%;
  width: calc(33.33% - 13.33px);
  background-color: pink;
  border-radius: 5px;
`

function InfosGraph() {
  return (
    <Infos>
      <InfosItem></InfosItem>
      <InfosItem></InfosItem>
      <InfosItem></InfosItem>
    </Infos>
  )
}

export default InfosGraph
