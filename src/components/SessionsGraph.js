import styled from 'styled-components'
import PropTypes from 'prop-types'
import Loader from './Loader'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function CustomisedTooltip({ active, payload }) {
  if (active && payload) {
    return <span>{`${payload[0].value} min`}</span>
  }
  return null
}

function CustomisedActiveDot(props) {
  const { cx, cy } = props
  return (
    <svg x={cx - 20} y={cy - 250} width="500" height="500">
      <rect x="20" width="500" height="500" fill="rgba(0, 0, 0, 0.2)" />
      <circle cx="20" cy="50%" r="10" fill="rgba(255, 255, 255, 0.4)" />
      <circle cx="20" cy="50%" r="3" fill="rgba(255, 255, 255, 1)" />
    </svg>
  )
}

/**
 * Displays the Average Sessions graph.
 * @param {object} props - The props object containing the following properties:
 * @param {object}  props.userDataSessions - The object containing the user data sessions.
 * @returns {JSX.Element} - The JSX markup for the SessionsGraph component.
 */
function SessionsGraph({ userDataSessions }) {
  /**
   * Data needs to be re-formated to be used as graph data.
   * -> backend documentation says “weeks always starts on monday”
   * @param {object} data - The object containing the user data.
   * @returns {array} - The array containing data used for the graph.
   */
  function formatDataSessions(data) {
    if (data.data !== undefined) {
      const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
      const sessions = data.data.sessions
      return sessions.map((session, index) => ({
        day: daysOfWeek[index],
        sessionLength: session.sessionLength,
      }))
    }
  }

  return (
    <ContainerSessionsGraph>
      <TitleGraph>
        Durée moyenne <br />
        des sessions
      </TitleGraph>
      {userDataSessions.isDataLoading ? (
        <Loader size={'28px'} color={'#f79797'} />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={
              userDataSessions.data.sessions &&
              formatDataSessions(userDataSessions)
            }
            margin={{
              top: 0,
              right: 8,
              left: 8,
              bottom: 15,
            }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              tick={{ fill: '#fff' }}
              style={{
                fontSize: '14px',
                fontFamily: 'Roboto',
                transform: 'scaleX(0.9)',
                transformOrigin: 'center',
              }}
              wrapperStyle={{
                transform: 'scaleX(0.8)',
                transformOrigin: 'center',
              }}
            />
            <YAxis hide={true} domain={[0, 'dataMax + 45']} />
            <Tooltip
              content={<CustomisedTooltip />}
              wrapperStyle={{
                background: '#FFF',
                color: '#282d30',
                fontSize: '14px',
                lineHeight: '24px',
                padding: '7px 12px',
                outline: 'none',
              }}
              cursor={{ stroke: 'rgba(255,255,255, 0)' }}
            />
            <Area
              type="monotone"
              dataKey="sessionLength"
              stroke="rgba(255,255,255, 0.8)"
              strokeWidth={2}
              fill="transparent"
              dot={false}
              activeDot={CustomisedActiveDot}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </ContainerSessionsGraph>
  )
}

export default SessionsGraph

SessionsGraph.propTypes = {
  userDataSessions: PropTypes.object,
}

const ContainerSessionsGraph = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
const TitleGraph = styled.h3`
  line-height: 24px;
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  left: 35px;
  top: 15px;
  color: #f79797;
`
