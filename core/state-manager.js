const _state = {
    settings: {
        gridSize: {
            rows: 4,
            columns: 4
        }
    },
    points: {
        google: 0,
        players: [1, 2]
    },
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
    const playerIndex = playerNumber -1;

    if (playerIndex < 0 || playerIndex > _state.points.players.length - 1){
        throw new Error('Incorrect player number')
    }

    return _state.points.players[playerIndex]
}

export async function getGridSize (){
    return {..._state.settings.gridSize}
}