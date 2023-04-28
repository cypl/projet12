import styled from 'styled-components'
import PropTypes from 'prop-types'
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

function ActivityGraph({ data }) {
  function formatData(data) {
    if (data.id !== undefined) {
      return data.sessions.map((session) => {
        const [year, month, day] = session.day.split('-')
        const dayMonth = `${day}/${month}`
        return {
          ...session,
          day: dayMonth,
        }
      })
    }
  }
  return (
    <ActivityWrapper className="chart_activity_wrapper">
      <ActivityWrapperMargin>
        <TitleGraph>Activité quotidienne</TitleGraph>
        <ResponsiveContainer
          className="chart_activity_container"
          width="100%"
          height="100%"
        >
          <BarChart
            data={formatData(data)}
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
            <Tooltip />
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
      </ActivityWrapperMargin>
    </ActivityWrapper>
  )
}
export default ActivityGraph

ActivityGraph.propTypes = {
  data: PropTypes.object,
}
