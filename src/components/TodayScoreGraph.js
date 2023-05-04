import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useFetch } from '../api/api'
import { UserData } from '../dataModels/dataModels'
import Loader from './Loader'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const ScoreWrapperMargin = styled.div`
  position: absolute;
  top: 15px;
  left: 25px;
  height: calc(100% - 30px);
  width: calc(100% - 50px);
`
const TitleGraph = styled.h3`
  line-height: 24px;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  left: 10px;
  top: 0;
  color: #222;
`

function TodayScoreGraph({ idUser, dataSource }) {
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

  function formatTodayScore(data) {
    if (data.id !== undefined) {
      const score = [
        { todayScore: +data.todayScore }, // = score réel
        { todayScore: 1 - +data.todayScore }, // = différence par rapport à 1
      ]
      return score
    }
  }
  const dataScore = formatTodayScore(fUserData)

  return (
    <ScoreWrapperMargin>
      <TitleGraph>Score</TitleGraph>
      {isDataLoading ? (
        <Loader size={'28px'} />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={dataScore}
              dataKey="todayScore"
              startAngle={90}
              endAngle={450}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={80}
              stroke="#fbfbfb"
              cornerRadius={50}
              animationBegin={0}
              animationDuration={400}
            >
              <Cell fill={'#e60000'} />
              <Cell fill={'#fbfbfb'} />
            </Pie>
            <circle cx="50%" cy="50%" r="70" fill="#fff" />
            <text textAnchor="middle" fontSize={15} fontWeight={400}>
              <tspan
                x="50%"
                y="46%"
                fontSize={26}
                fill={'#282D30'}
                fontWeight={700}
              >
                {dataScore && dataScore[0].todayScore * 100}%
              </tspan>
              <tspan x="50%" y="56%" fill={'#9b9eac'}>
                de votre
              </tspan>
              <tspan x="50%" y="65%" fill={'#9b9eac'}>
                objectif
              </tspan>
            </text>
          </PieChart>
        </ResponsiveContainer>
      )}
    </ScoreWrapperMargin>
  )
}

export default TodayScoreGraph

TodayScoreGraph.propTypes = {
  idUser: PropTypes.number,
  dataSource: PropTypes.string,
}
