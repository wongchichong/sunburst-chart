import Sunburst from "../../src/index"
// import Kapsule from "kapsule"

const data = {
    name: 'main',
    color: 'magenta',
    children: [{
        name: 'a',
        color: 'yellow',
        size: 1
    }, {
        name: 'b',
        color: 'red',
        children: [{
            name: 'ba',
            color: 'orange',
            size: 1
        }, {
            name: 'bb',
            color: 'blue',
            children: [{
                name: 'bba',
                color: 'green',
                size: 1
            }, {
                name: 'bbb',
                color: 'pink',
                size: 1
            }]
        }]
    }]
}

Sunburst()
    .data(data)
    .size('size')
    .color('color')
    .radiusScaleExponent(1)
    (document.getElementById('chart')).width(800).height(800)


