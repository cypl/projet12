import styled from 'styled-components'

const Infos = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: calc(45% - 10px);
  width: 100%;
  background: pink;
`

function InfosGraph() {
  return <Infos></Infos>
}

export default InfosGraph
