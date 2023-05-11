import styled from 'styled-components'
import PropTypes from 'prop-types'
import Loader from './Loader'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

/**
 * Displays the Today Score graph.
 * @param {object} props - The props object containing the following properties:
 * @param {object}  props.userData - The object containing the user data.
 * @returns {JSX.Element} - The JSX markup for the TodayScoreGraph component.
 */
function TodayScoreGraph({ userData }) {
  /**
   * Data needs to be re-formated to be used as graph data.
   * @param {object} data - The object containing the user data.
   * @returns {array} - The array containing data used for the graph.
   */
  function formatTodayScore(data) {
    if (data.id !== undefined) {
      const score = [
        { todayScore: +data.todayScore },
        { todayScore: 1 - +data.todayScore },
      ]
      return score
    }
  }
  const dataScore = formatTodayScore(userData.data)

  return (
    <ScoreWrapperMargin>
      <TitleGraph>Score</TitleGraph>
      {userData.isDataLoading ? (
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
  userData: PropTypes.object,
}

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
