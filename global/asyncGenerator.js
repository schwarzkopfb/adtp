'use strict'

const Pipeline = require('../lib/pipeline'),
      AsyncGenerator = Object.getPrototypeOf(/* istanbul ignore next */async function* () {})

AsyncGenerator.prototype.toPipeline = function() {
    return new Pipeline(this)
}
