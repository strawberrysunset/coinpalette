const colours = {
    dark : '#191a1d',
    dark2 : '#474952', //'#27557d',
    dark3: '#212940',
    light : '#f2f8fd',
    light2: '#d3e7f8',
    light3: '#a7cef1',
    accent : '#A24D91'
}

const breakpoints = {
    "min" : 320,
    "max" : 800
}

const unit = (n) => `${Math.floor(n * 8)}px`

const fontScalingFactor = 1.086;

module.exports = { colours, breakpoints, unit, fontScalingFactor }
