const colorList = require('../colorList.json');

// Get a list of colors for specified coins.
module.exports = function getColors({ coins }) {

    // Return all if none specified.
    if(!coins) return colorList 

    let selected = {}
    for (coin of coins) {
      selected[coin] = colorList[coin]
    }

    // Filter based on specified coins.
    return selected
}


