import Sunburst from "../../src/index"
import * as d3 from 'd3'

import data from './flare.json'

const color = d3.scaleOrdinal(d3.schemePaired)

Sunburst()
    .data(data)
    .label('name')
    .size('size')
    .color((d, parent) => color(parent ? parent.data.name : null))
    .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
    .handleNonFittingLabel((label, availablePx) => {
        const numFitChars = Math.round(availablePx / 7) // ~7px per char
        return numFitChars < 5
            ? null
            : `${label.slice(0, Math.round(numFitChars) - 3)}...`
    })
    (document.getElementById('chart5')).width(800).height(800)
