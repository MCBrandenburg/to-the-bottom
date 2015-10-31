#!/usr/bin/env node

'use strict'

var fs = require('fs')
var pkg = require('../package.json')
var program = require('commander')
var _ = require('lodash')
var destinationData = []

function getChildItem (object) {
  if (object[program.childName]) {
    if (program.includeAll) {
      var temp = _.omit(object, program.childName)
      destinationData.push(temp)
    }
    _.forEach(object[program.childName],
      function (o) {
        getChildItem(o)
      }
    )
  } else {
    destinationData.push(object)
  }
}

function getChildData () {
  var sourceObject = require(program.sourceFile)
  if (_.isArray(sourceObject)) {
    _.forEach(sourceObject, function (o) {
      getChildItem(o)
    })
  } else {
    getChildItem(sourceObject)
  }
}

function writeDestFile () {
  console.log(`Writing file to: ${program.destFile}`)
  fs.writeFile(program.destFile, JSON.stringify(destinationData, null, 2))
  console.log('Done!')
}

program.version(pkg.version)
program.option('-s, --sourceFile <value>', 'File to parse through')
program.option('-d, --destFile <value>', 'Destination file for output')
program.option('-c,--childName <value>', 'Name of child variable', 'children')
program.option('-a,--includeAll', 'Will include items with children.')
program.parse(process.argv)

if (!program.sourceFile) {
  console.log('No --sourceFile (-s) specified')
} else {
  console.log(`Source file is: ${program.sourceFile}`)
}

if (!program.destFile) {
  console.log('No --destFile (-s) specified')
} else {
  console.log(`Destination file is: ${program.destFile}`)
}

if (!program.childName) {
  console.log('No --childName (-c) specified')
} else {
  console.log(`Child property is: ${program.childName}`)
}

if (program.includeAll) {
  console.log('Including all item.')
}

if (program.sourceFile && program.destFile && program.childName) {
  getChildData()
  writeDestFile()
}
