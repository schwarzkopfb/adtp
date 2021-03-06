'use strict'

module.exports = toAsyncIterableFactory

const AsyncIterable = require('./AsyncIterable')

// actually this is a factory that creates another factory
function toAsyncIterableFactory(fn) {
    function wrapper() {
        return new AsyncIterable(fn.call(this, ...arguments))
    }

    const { name, aliases } = fn

    Object.defineProperties(wrapper, { 
        name: { value: name },
        aliases: { value: aliases } 
    })

    return wrapper
}
