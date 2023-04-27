import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IconCarbo, IconEnergy, IconLipid, IconProtein } from '../utils/icons'

const UserFood = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: calc(20% - 10px);
`
const Food = styled.article`
  position: relative;
  height: calc(25% - 15px);
  margin-bottom: 20px;
  background-color: #fbfbfb;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`
const FoodContainer = styled.div`
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
const FoodIconWrapper = styled.div`
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
const FoodTxt = styled.div`
  position: absolute;
  height: 50px;
  width: calc(100% - 50px);
  right: 0;
  padding-left: 10px;
`
const FoodTxt1 = styled.p`
  margin-top: 3px;
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  color: #282d30;
`
const FoodTxt2 = styled.p`
  font-size: 12px;
  line-height: 22px;
  color: #74798c;
`

function FoodConsumption({ calorie, protein, carbo, lipid }) {
  return (
    <UserFood>
      <Food>
        <FoodContainer>
          <FoodIconWrapper>
            <FoodIconBg style={{ backgroundColor: '#FF0000' }}></FoodIconBg>
            <IconEnergy color={'#FF0000'} />
          </FoodIconWrapper>
          <FoodTxt>
            <FoodTxt1>{calorie}kCal</FoodTxt1>
            <FoodTxt2>Calories</FoodTxt2>
          </FoodTxt>
        </FoodContainer>
      </Food>

      <Food>
        <FoodContainer>
          <FoodIconWrapper>
            <FoodIconBg style={{ backgroundColor: '#4AB8FF' }}></FoodIconBg>
            <IconProtein color={'#4AB8FF'} />
          </FoodIconWrapper>
          <FoodTxt>
            <FoodTxt1>{protein}g</FoodTxt1>
            <FoodTxt2>Protéines</FoodTxt2>
          </FoodTxt>
        </FoodContainer>
      </Food>

      <Food>
        <FoodContainer>
          <FoodIconWrapper>
            <FoodIconBg style={{ backgroundColor: '#FDCC0C' }}></FoodIconBg>
            <IconCarbo color={'#FDCC0C'} />
          </FoodIconWrapper>
          <FoodTxt>
            <FoodTxt1>{carbo}g</FoodTxt1>
            <FoodTxt2>Glucides</FoodTxt2>
          </FoodTxt>
        </FoodContainer>
      </Food>

      <Food>
        <FoodContainer>
          <FoodIconWrapper>
            <FoodIconBg style={{ backgroundColor: '#FD5181' }}></FoodIconBg>
            <IconLipid color={'#FD5181'} />
          </FoodIconWrapper>
          <FoodTxt>
            <FoodTxt1>{lipid}g</FoodTxt1>
            <FoodTxt2>Lipides</FoodTxt2>
          </FoodTxt>
        </FoodContainer>
      </Food>
    </UserFood>
  )
}
export default FoodConsumption

FoodConsumption.propTypes = {
  calorie: PropTypes.number,
  protein: PropTypes.number,
  carbo: PropTypes.number,
  lipid: PropTypes.number,
}
