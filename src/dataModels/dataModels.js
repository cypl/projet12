/**
 * retrieves information from a user
 */
export class UserData {
  constructor(data) {
    this.id = data.id
    this.userInfos = data.userInfos
    this.todayScore = data.todayScore ?? data.score
    this.keyData = data.keyData
  }
}

/**
 * retrieves activity from a user
 */
export class UserDataActivity {
  constructor(data) {
    this.id = data.id
    this.sessions = data.sessions
  }
}
