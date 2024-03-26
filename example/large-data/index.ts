import Sunburst from "../../src/index"
import * as d3 from 'd3'

const CHILDREN_PROB_DECAY = 0.15 // per level
const MAX_CHILDREN = 20
const MAX_VALUE = 100

function genNode(name = 'root' as string | number, probOfChildren = 1) {
    if (Math.random() < probOfChildren) {
        return {
            name,
            children: [...Array(Math.round(Math.random() * MAX_CHILDREN))]
                .map((_, i) => genNode(i, probOfChildren - CHILDREN_PROB_DECAY))
        }
    } else {
        return {
            name,
            value: Math.round(Math.random() * MAX_VALUE)
        }
    }
}

const color = d3.scaleOrdinal(d3.schemePaired)

Sunburst()
    .data(genNode())
    .color(d => color(d.name))
    .minSliceAngle(.4)
    .excludeRoot(true)
    .maxLevels(6)
    .showLabels(false)
    .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
    (document.getElementById('chart3')).width(800).height(800)
