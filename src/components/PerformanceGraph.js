import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import Loader from './Loader'

/**
 * Displays the Performance graph.
 * @param {object} props - The props object containing the following properties:
 * @param {object}  props.userDataPerformance - The object containing the user data performance.
 * @returns {JSX.Element} - The JSX markup for the Performance component.
 */
function PerformanceGraph({ userDataPerformance }) {
  /**
   * Data needs to be re-formated to be used as graph data.
   * @param {object} data - The object containing the user data.
   * @returns {array} - The array containing data used for the graph.
   */
  function formatDataPerformance(data) {
    if (data.data.kind) {
      const allKindsFR = [
        'Cardio',
        'Energie',
        'Endurance',
        'Force',
        'Vitesse',
        'Intensité',
      ]
      const allPerformances = data.data.data
      return allPerformances.map((perf, index) => ({
        value: perf.value,
        kind: allKindsFR[index],
      }))
    }
  }

  return (
    <ContainerPerformanceGraph>
      {userDataPerformance.isDataLoading ? (
        <Loader size={'28px'} color={'#888'} />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="55%"
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            data={
              userDataPerformance.data.kind &&
              formatDataPerformance(userDataPerformance)
            }
          >
            <PolarGrid stroke="#fff" radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              stroke="#fff"
              tickLine={false}
              tick={{
                dy: 4,
                fill: '#fff',
                fontSize: 12,
              }}
            />
            <Radar dataKey="value" fill="#e60000" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </ContainerPerformanceGraph>
  )
}

export default PerformanceGraph

PerformanceGraph.propTypes = {
  userDataPerformance: PropTypes.object,
}

const ContainerPerformanceGraph = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
