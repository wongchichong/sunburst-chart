import Sunburst from "../../src/index"
import * as d3 from 'd3'

import data from './flare.json'

const color = d3.scaleOrdinal(d3.schemePaired)

// fetch('flare.json').then(res => res.json()).then(data => {
Sunburst()
    .data(data)
    .label('name')
    .size('size')
    .color((d, parent) => color(parent ? parent.data.name : null))
    .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
    (document.getElementById('chart2')).width(800).height(800)
// })