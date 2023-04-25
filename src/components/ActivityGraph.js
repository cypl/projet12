import styled from 'styled-components'
import PropTypes from 'prop-types'

const ActivityWrapper = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  height: calc(55% - 10px);
  width: 100%;
  background: #ccc;
  border-radius: 5px;
`

function ActivityGraph({ data }) {
  return (
    <ActivityWrapper>
      <p>{data.sessions && data.sessions[0].calories}</p>
      <p>{data.sessions && data.sessions[1].calories}</p>
      <p>{data.sessions && data.sessions[2].calories}</p>
      <p>{data.sessions && data.sessions[3].calories}</p>
      <p>{data.sessions && data.sessions[4].calories}</p>
      <p>{data.sessions && data.sessions[5].calories}</p>
      <p>{data.sessions && data.sessions[6].calories}</p>
    </ActivityWrapper>
  )
}
export default ActivityGraph

ActivityGraph.propTypes = {
  data: PropTypes.object,
}
