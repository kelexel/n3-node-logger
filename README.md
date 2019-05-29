# n3-node-logger
A simple dynamic logging facility wrapper

## Purpose:

* Allow to create a generic logger wrapper able to use several logging facilities.

## Usage:

First, create your logging facility:
```
// app.js
const _logger = new require('n3-node-logger')();

// optionally, set your own custom logger
const config = {
  loggingFacility: debug,
  logOkPrefix: 'NodeID ok',
  logErrorPrefix: 'NodeID ok'
}
_logger.setLogger(config);
```

## Notes & disclaimers:
* This was designed to fit specific needs (mine). You will probably need to modify it, so feel free to fork and improve it (but please, make a PR).
* I wish someone could write a few sample tests for this wrapper.
* As always, use at your own risk.

## Changelog:
* 1.0.0: Initial release

## Todo
* Write tests
