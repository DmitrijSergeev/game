const _state = {
    settings: {
        gridSize: {
            rows: 4,
            columns: 4
        }
    },
    positions: {
        google: {
            x:1, y:1
        },
        players: [{x:2, y:2}, {x:3, y:3}]
    },
    points: {
        google: 0,
        players: [1, 2]
    },
}

function _getPlayerIndexByNumber (playerNumber){
    const playerIndex = playerNumber -1;

    if (playerIndex < 0 || playerIndex > _state.points.players.length - 1){
        throw new Error('Incorrect player number')
    }
    return playerIndex
}

export async function getGooglePoints (){
    return _state.points.google
}

/**
 *
 * @param {number} playerNumber - one-based index of player
 * @returns {Promise <number>} number of points
 */

export async function getPlayerPoints (playerNumber){
    const playerIndex = _getPlayerIndexByNumber(playerNumber)

    return _state.points.players[playerIndex]
}

export async function getGridSize (){
    return {..._state.settings.gridSize}
}

export async function getGooglePosition(){
    return {..._state.positions.google}
}

export async function getPlayerPosition(playerNumber){
    const playerIndex = _getPlayerIndexByNumber(playerNumber)

    return _state.positions.players[playerIndex]
}