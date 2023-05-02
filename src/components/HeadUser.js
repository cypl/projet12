import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { UserData } from '../dataModels/dataModels'
import { useFetch } from '../api/api'
import SwitchData from './SwitchData'

const HeadingUser = styled.header`
  position: absolute;
  width: 90%;
  max-width: 1100px;
  left: 50%;
  transform: translate(-50%, 0);
  height: 150px;
  @media (max-width: 1024px) {
    width: calc(100% - 60px);
  }
`
const HelloUser = styled.h1`
  font-size: 44px;
  line-height: 1;
  font-weight: 500;
  margin-top: 35px;
`
const MessageUser = styled.p`
  line-height: 1.4;
  font-weight: 400;
  margin-top: 12px;
`
const UserFirstName = styled.span`
  color: #e60000;
`

function HeadUser({
  idUser,
  dataSource,
  switchUser,
  switchMockSource,
  switchDevSource,
}) {
  // - retrieves information from a user
  const [dataUser, setDataUser] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  useFetch(
    idUser,
    `../data/mockedUsersInfos.json`,
    `http://localhost:3000/user/${idUser}`,
    dataSource,
    setDataUser,
    setDataLoading
  )
  const fUserData = new UserData(dataUser)

  return (
    <HeadingUser>
      <HelloUser>
        Bonjour{' '}
        <UserFirstName>
          {isDataLoading
            ? '...'
            : fUserData.userInfos && fUserData.userInfos.firstName}
        </UserFirstName>
      </HelloUser>
      <MessageUser>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </MessageUser>
      <SwitchData
        switchMockSource={switchMockSource}
        switchDevSource={switchDevSource}
        switchUser={switchUser}
        dataSource={dataSource}
      />
    </HeadingUser>
  )
}

export default HeadUser

HeadUser.propTypes = {
  idUser: PropTypes.number,
  dataSource: PropTypes.string,
}
