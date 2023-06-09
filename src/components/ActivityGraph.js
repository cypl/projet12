import styled from 'styled-components'
import PropTypes from 'prop-types'
import Loader from './Loader'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

/**
 * Displays the Activity graph.
 * @param {object} props - The props object containing the following properties:
 * @param {object}  props.userDataActivity - The object containing the user data activity.
 * @returns {JSX.Element} - The JSX markup for the ActivityGraph component.
 */
function ActivityGraph({ userDataActivity }) {
  /**
   * Data needs to be re-formated to be used as graph data.
   * @param {object} data - The object containing the user data.
   * @returns {array} - The array containing data used for the graph.
   */
  function formatData(data) {
    if (data.id !== undefined) {
      return data.sessions.map((session) => {
        // eslint-disable-next-line no-unused-vars
        const [year, month, day] = session.day.split('-')
        const dayMonth = `${day}/${month}`
        return {
          ...session,
          day: dayMonth,
        }
      })
    }
  }

  function CustomisedTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <TooltipWrapper>
          <TooltipItem>{`${payload[1].value} kg`}</TooltipItem>
          <TooltipItem>{`${payload[0].value} kCal`}</TooltipItem>
        </TooltipWrapper>
      )
    }
  }

  return (
    <ActivityWrapper className="chart_activity_wrapper">
      <ActivityWrapperMargin>
        <TitleGraph>Activité quotidienne</TitleGraph>
        {userDataActivity.isDataLoading ? (
          <Loader size={'28px'} />
        ) : (
          <ResponsiveContainer
            className="chart_activity_container"
            width="100%"
            height="100%"
          >
            <BarChart
              data={formatData(userDataActivity.data)}
              barGap={8}
              margin={{
                top: 20,
                right: -30,
                left: -50,
                bottom: -5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#DEDEDE"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9B9EAC' }}
                style={{
                  fontSize: '14px',
                  fontFamily: 'Roboto',
                }}
              />
              <YAxis
                dataKey="kilogram"
                yAxisId="kilogram"
                domain={['dataMin -2', 'dataMax + 1']}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9B9EAC' }}
                orientation="right"
                style={{
                  fontSize: '14px',
                  fontFamily: 'Roboto',
                }}
              />
              <YAxis
                dataKey="calories"
                yAxisId="calories"
                domain={['dataMin -25', 'dataMax + 10']}
                axisLine={false}
                tickLine={false}
                tick={false}
                orientation="left"
              />
              <Tooltip
                cursor={{ fill: '#C4C4C480' }}
                wrapperStyle={{ outline: 'none' }}
                content={<CustomisedTooltip />}
              />
              <Legend
                iconType={'circle'}
                iconSize={'8px'}
                align={'right'}
                formatter={(value) => (
                  <span style={{ color: '#9B9EAC' }}>{value}</span>
                )}
                wrapperStyle={{
                  width: '50%',
                  top: '-24px',
                  right: '-8px',
                  lineHeight: '24px',
                  fontSize: '14px',
                  fontFamily: 'Roboto',
                }}
              />
              <Bar
                dataKey="kilogram"
                name="Poids (kg)"
                yAxisId="kilogram"
                barSize={8}
                fill="#282D30"
                radius={[50, 50, 0, 0]}
              />
              <Bar
                dataKey="calories"
                name="Calories brûlées (kCal)"
                yAxisId="calories"
                barSize={8}
                fill="#E60000"
                radius={[50, 50, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </ActivityWrapperMargin>
    </ActivityWrapper>
  )
}
export default ActivityGraph

ActivityGraph.propTypes = {
  userDataActivity: PropTypes.object,
}
const ActivityWrapper = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  height: calc(55% - 10px);
  width: 100%;
  background: #fbfbfb;
  border-radius: 5px;
`
const ActivityWrapperMargin = styled.div`
  position: absolute;
  top: 15px;
  left: 25px;
  height: calc(100% - 30px);
  width: calc(100% - 50px);
  .chart_activity_container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 24px;
  }
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
const TooltipWrapper = styled.ul`
  background-color: #e60000;
  padding: 7px 12px;
`
const TooltipItem = styled.li`
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
`
