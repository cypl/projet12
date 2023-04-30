import { useState } from 'react'
import { useFetch } from '../api/api'
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

function FoodIntake({ userId, dataSource }) {
  // - retrieves information from a user
  const [dataUser, setDataUser] = useState({})
  useFetch(
    idUser,
    `../data/mockedUsersInfos.json`,
    `http://localhost:3000/user/${idUser}`,
    dataSource,
    setDataUser
  )
  const fUserData = new UserData(dataUser)

  const foodName = ['Calories', 'Protéines', 'Glucides', 'Lipides']
  const foodIcons = [
    <IconEnergy />,
    <IconProtein />,
    <IconCarbo />,
    <IconLipid />,
  ]
  const foodColors = ['#FF0000', '#4AB8FF', '#FDCC0C', '#FD5181']

  return (
    <UserFood>
      {foodName.map((foodItem, index) => (
        <Food key={index}>
          <FoodContainer>
            <FoodIconWrapper>
              <FoodIconBg
                style={{ backgroundColor: foodColors[{ index }] }}
              ></FoodIconBg>
              <IconEnergy color={foodColors[{ index }]} />
            </FoodIconWrapper>
            <FoodTxt>
              <FoodTxt1>
                {fUserData.keyData && fUserData.keyData.proteinCount}
                {index === 0 ? 'kCal' : 'g'}
              </FoodTxt1>
              <FoodTxt2>{foodItem}</FoodTxt2>
            </FoodTxt>
          </FoodContainer>
        </Food>
      ))}
    </UserFood>
  )
}
export default FoodIntake

FoodIntake.propTypes = {
  idUser: PropTypes.number,
  dataSource: PropTypes.string,
}
