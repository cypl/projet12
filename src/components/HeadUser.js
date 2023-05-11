import styled from 'styled-components'
import PropTypes from 'prop-types'
import SwitchData from './SwitchData'
import Loader from './Loader'

/**
 *
 * @param {object} props - The props object containing the following properties:
 * @param {object} props.userData - The object containing the user data.
 * @param {string} props.dataSource - The name of the data source.
 * @param {function} props.switchUser - The function to switch user.
 * @param {function} props.switchMockSource - The function to switch to mock data source.
 * @param {function} props.switchDevSource - The function to switch to development data source.
 * @returns {JSX.Element} - The JSX markup for the HeadUser component.
 */
function HeadUser({
  userData,
  dataSource,
  switchUser,
  switchMockSource,
  switchDevSource,
}) {
  return (
    <HeadingUser>
      <HelloUser>
        Bonjour{' '}
        <UserFirstName>
          {userData.isDataLoading ? (
            <Loader size={'28px'} color={'#e60000'} position={'inline'} />
          ) : (
            userData.data.userInfos && userData.data.userInfos.firstName
          )}{' '}
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
  userData: PropTypes.object,
  dataSource: PropTypes.string,
  switchUser: PropTypes.func,
  switchMockSource: PropTypes.func,
  switchDevSource: PropTypes.func,
}

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
