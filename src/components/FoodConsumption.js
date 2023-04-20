import styled from 'styled-components'

const AsideUser = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: calc(18% - 10px);
  background: blue;
`

function FoodConsumption() {
  return <AsideUser></AsideUser>
}
export default FoodConsumption
