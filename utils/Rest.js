'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _headers = { 'Accept': 'application/json' }; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var _timeout = 10000; // 10s

// convert params to string, to deal with array values
function buildQueryParams(params) {
  var result = [];
  for (var property in params) {
    if (params.hasOwnProperty(property)) {
      var value = params[property];
      if (null !== value && undefined !== value) {
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            result.push(property + '=' + value[i]);
          }
        } else {
          result.push(property + '=' + value);
        }
      }
    }
  }
  return result.join('&');
}

exports.default = {
  setTimeout: function setTimeout(timeout) {
    _timeout = timeout;
  },
  setHeaders: function setHeaders(headers) {
    _headers = headers;
  },
  setHeader: function setHeader(name, value) {
    _headers[name] = value;
  },
  head: function head(uri, params) {
    var op = _superagent2.default.head(uri).query(buildQueryParams(params));
    op.timeout(_timeout);
    op.set(_headers);
    return op;
  },
  get: function get(uri, params) {
    var op = _superagent2.default.get(uri).query(buildQueryParams(params));
    op.timeout(_timeout);
    op.set(_headers);
    return op;
  },
  patch: function patch(uri, data) {
    var op = _superagent2.default.patch(uri).send(data);
    op.timeout(_timeout);
    op.set(_headers);
    return op;
  },
  post: function post(uri, data) {
    var op = _superagent2.default.post(uri).send(data);
    op.timeout(_timeout);
    op.set(_headers);
    return op;
  },
  put: function put(uri, data) {
    var op = _superagent2.default.put(uri).send(data);
    op.timeout(_timeout);
    op.set(_headers);
    return op;
  },
  del: function del(uri) {
    var op = _superagent2.default.del(uri);
    op.timeout(_timeout);
    op.set(_headers);
    return op;
  }
};
module.exports = exports['default'];