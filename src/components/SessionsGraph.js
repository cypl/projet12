import { useState } from 'react'
import styled from 'styled-components'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useFetch } from '../api/api'
import { UserDataSessions } from '../dataModels/dataModels'

function CustomisedTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <span className="customised-tooltip">{`${payload[0].value} min`}</span>
    )
  }
  return null
}

function SessionsGraph({ idUser, dataSource }) {
  // - retrieves average sessions from a user
  const [dataSessions, setDataSessions] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

  useFetch(
    idUser,
    `../data/mockedUsersSessions.json`,
    `http://localhost:3000/user/${idUser}/average-sessions`,
    dataSource,
    setDataSessions,
    setDataLoading
  )
  const userDataSessions = new UserDataSessions(dataSessions)
  if (dataSessions) {
    console.log(userDataSessions.sessions)
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={userDataSessions.sessions}
        margin={{
          top: 0,
          right: 8,
          left: 8,
          bottom: 15,
        }}
      >
        <rect width="28.6%" x="71.4%" height="100%" fill="rgba(0,0,0, 0.2)" />
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
          //   allowDataOverflow={true}
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
          cursor={{ stroke: 'rgba(255,255,255, 0.2)' }}
        />
        <Area
          type="monotone"
          dataKey="sessionLength"
          stroke="rgba(255,255,255, 0.8)"
          strokeWidth={2}
          fill="transparent"
          dot={false}
          activeDot={{
            stroke: 'rgba(255,255,255, 0.2)',
            strokeWidth: 12,
            r: 4,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default SessionsGraph
