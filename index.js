'use strict'

const stream = require('./src/stream')

module.exports = {
  createDecodeStream: stream.createDecodeStream,
  decode: stream.createDecodeStream,
  createEncodeStream: stream.createEncodeStream,
  encode: stream.createEncodeStream,
  types: require('./src/types'),
  messages: require('./src/messages'),
  constants: require('./src/constants'),
  kmdtypes: require('./src/kmdtypes'),
  kmdmessages: require('./src/kmdmessages'),

  struct: require('varstruct'),
  varint: require('varuint-bitcoin')
}
