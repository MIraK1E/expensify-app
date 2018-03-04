const moment = require.requireActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp)
}

// this file is mock moment value 