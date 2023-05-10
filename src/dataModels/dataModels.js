/**
 * retrieves information from a user
 */
export function UserData(data) {
  return {
    id: data.id,
    userInfos: data.userInfos,
    todayScore: data.todayScore ?? data.score,
    keyData: data.keyData,
  }
}

/**
 * retrieves activity from a user
 */
export function UserDataActivity(data) {
  return {
    id: data.userId,
    sessions: data.sessions,
  }
}

/**
 * retrieves average sessions from a user
 */
export function UserDataSessions(data) {
  return {
    id: data.userId,
    sessions: data.sessions,
  }
}

/**
 * retrieves average sessions from a user
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
