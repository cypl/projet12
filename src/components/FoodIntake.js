import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IconCarbo, IconEnergy, IconLipid, IconProtein } from '../utils/icons'
import Loader from './Loader'

/**
 * Displays the sidebar with food indicators.
 * @param {object} props - The props object containing the following properties:
 * @param {object}  props.userData - The object containing the user data.
 * * @returns {JSX.Element} - The JSX markup for the FoodIntake component.
 */
function FoodIntake({ userData }) {
  function getDataByIndex(index) {
    if (!userData.isDataLoading) {
      return Object.values(userData.data.keyData)[index]
    }
  }

  const foodNames = ['Calories', 'Protéines', 'Glucides', 'Lipides']
  const foodIcons = [
    <IconEnergy color={'#FF0000'} />,
    <IconProtein color={'#4AB8FF'} />,
    <IconCarbo color={'#FDCC0C'} />,
    <IconLipid color={'#FD5181'} />,
  ]
  const foodColors = ['#FF0000', '#4AB8FF', '#FDCC0C', '#FD5181']
  return (
    <UserFood>
      {foodNames.map((foodName, index) => (
        <Food key={index}>
          <FoodContainer>
            <FoodIconWrapper>
              <FoodIconBg
                style={{ backgroundColor: foodColors[index] }}
              ></FoodIconBg>
              {foodIcons[index]}
            </FoodIconWrapper>
            <FoodTxt>
              <FoodTxt1>
                {userData.isDataLoading ? (
                  <Loader position={'inline'} />
                ) : (
                  userData.data.keyData && getDataByIndex(index)
                )}{' '}
                {index === 0 ? 'kCal' : 'g'}
              </FoodTxt1>
              <FoodTxt2>{foodName}</FoodTxt2>
            </FoodTxt>
          </FoodContainer>
        </Food>
      ))}
    </UserFood>
  )
}
export default FoodIntake

FoodIntake.propTypes = {
  userData: PropTypes.object,
}

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
