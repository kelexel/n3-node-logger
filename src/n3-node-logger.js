/*
 n3-node-logger

 A simple dynamic logging facility wrapper

 author: Rudolph Sand (kelexel)
 licence: MIT

*/

(function () {
  'use strict';
}());

class NodeLogger {
  constructor() {
  this._logOkPrefix = '';
  this._logErrorPrefix = '';
  this._loggingFacility = false;
  }
  log(status, message) {
    if (!this._loggingFacility) {
      if (status == 'ok' && console.log)
        console.log(status, message);
      else if (status == 'error' && console.error)
        console.error(message);
      else if (status == 'warn' && console.warn)
        console.warn(message);
      else
        console.log(status, message);
    }
    else {
      if (status == 'ok')
        this._loggingFacility(this._logOkPrefix+' | '+message);
      else
        this._loggingFacility(this._logErrorPrefix+' | '+message);
    }
  }
  setFacility(config) {
    this._logOkPrefix = config.logOkPrefix || 'Ok';
    this._logErrorPrefix = config.logErrorPrefix || 'Error';
    this._loggingFacility = config.loggingFacility;
    this.log('ok', 'Log Facility set!');
    return this;
  }
}

module.exports = () => {
  return new NodeLogger();
}
