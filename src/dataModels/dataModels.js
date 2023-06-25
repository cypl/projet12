/**
 * Format data for a user
 */
function UserData(data) {
  return {
    id: data.id,
    userInfos: data.userInfos,
    todayScore: data.todayScore ?? data.score,
    keyData: data.keyData,
  }
}

/**
 * Format data for a user activity
 */
function UserDataActivity(data) {
  return {
    id: data.userId,
    sessions: data.sessions,
  }
}

/**
 * Format data for a user average sessions
 */
function UserDataSessions(data) {
  return {
    id: data.userId,
    sessions: data.sessions,
  }
}

/**
 * Format data for a user performace
 */
function UserDataPerformance(data) {
  return {
    id: data.userId,
    kind: data.kind,
    data: data.data,
  }
}

export default function DataFactory(type, data) {
  if (type === 'user') return UserData(data)
  if (type === 'activity') return UserDataActivity(data)
  if (type === 'performance') return UserDataPerformance(data)
  if (type === 'sessions') return UserDataSessions(data)
}
