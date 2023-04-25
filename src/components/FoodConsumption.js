import styled from 'styled-components'
import { IconCarbo, IconEnergy, IconLipid, IconProtein } from '../utils/icons'

const AsideUser = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: calc(20% - 10px);
`
const FoodCons = styled.article`
  position: relative;
  height: calc(25% - 15px);
  margin-bottom: 20px;
  background-color: #fbfbfb;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`
const FoodConsContainer = styled.div`
  position: absolute;
  height: 50px;
  width: calc(100% - 30px);
  left: 30px;
  top: 50%;
  transform: translate(0, -50%);
  @media (max-width: 1150px) {
    left: 20px;
  }
  @media (max-width: 1050px) {
    left: 10px;
  }
`
const FoodConsIconWrapper = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  left: 0;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const FoodIconBg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0.15;
`
const FoodConsTxt = styled.div`
  position: absolute;
  height: 50px;
  width: calc(100% - 50px);
  right: 0;
  padding-left: 10px;
`
const FoodConsTxt1 = styled.p`
  margin-top: 3px;
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  color: #282d30;
`
const FoodConsTxt2 = styled.p`
  font-size: 12px;
  line-height: 22px;
  color: #74798c;
`

function FoodConsumption({ calories, proteines, glucides, lipides }) {
  return (
    <AsideUser>
      <FoodCons>
        <FoodConsContainer>
          <FoodConsIconWrapper>
            <FoodIconBg style={{ backgroundColor: '#FF0000' }}></FoodIconBg>
            <IconEnergy color={'#FF0000'} />
          </FoodConsIconWrapper>
          <FoodConsTxt>
            <FoodConsTxt1>{calories}kCal</FoodConsTxt1>
            <FoodConsTxt2>Calories</FoodConsTxt2>
          </FoodConsTxt>
        </FoodConsContainer>
      </FoodCons>
      <FoodCons>
        <FoodConsContainer>
          <FoodConsIconWrapper>
            <FoodIconBg style={{ backgroundColor: '#4AB8FF' }}></FoodIconBg>
            <IconProtein color={'#4AB8FF'} />
          </FoodConsIconWrapper>
          <FoodConsTxt>
            <FoodConsTxt1>{proteines}g</FoodConsTxt1>
            <FoodConsTxt2>Protéines</FoodConsTxt2>
          </FoodConsTxt>
        </FoodConsContainer>
      </FoodCons>
      <FoodCons>
        <FoodConsContainer>
          <FoodConsIconWrapper>
            <FoodIconBg style={{ backgroundColor: '#FDCC0C' }}></FoodIconBg>
            <IconCarbo color={'#FDCC0C'} />
          </FoodConsIconWrapper>
          <FoodConsTxt>
            <FoodConsTxt1>{glucides}g</FoodConsTxt1>
            <FoodConsTxt2>Glucides</FoodConsTxt2>
          </FoodConsTxt>
        </FoodConsContainer>
      </FoodCons>
      <FoodCons>
        <FoodConsContainer>
          <FoodConsIconWrapper>
            <FoodIconBg style={{ backgroundColor: '#FD5181' }}></FoodIconBg>
            <IconLipid color={'#FD5181'} />
          </FoodConsIconWrapper>
          <FoodConsTxt>
            <FoodConsTxt1>{lipides}g</FoodConsTxt1>
            <FoodConsTxt2>Lipides</FoodConsTxt2>
          </FoodConsTxt>
        </FoodConsContainer>
      </FoodCons>
    </AsideUser>
  )
}
export default FoodConsumption