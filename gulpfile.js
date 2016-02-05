/**
 * Please see `typhonjs-core-gulptasks` (https://www.npmjs.com/package/typhonjs-core-gulptasks)
 */
/* eslint-disable */

var gulp = require('gulp');

// Require all tasks and set `rootPath` to the base project path and `srcGlob` to all JS sources in `./src`.
require('typhonjs-core-gulptasks')(gulp,
{
   rootPath: __dirname,
   importTasks: ['esdoc', 'eslint', 'npm'],
   srcGlob: ['./src/**/*.js', './test/src/**/*.js']
});