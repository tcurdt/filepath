'use strict'

const Path = require('path')

function FilePath(path) {
  this.path = path
  return this
}

FilePath.prototype.pop = function(_n) {
  const n = (_n === undefined) ? 1 : _n
  const segments = this.path.split('/')
  const file = segments.pop()
  for(let i=0; i<n; i++) {
    segments.pop()
  }
  segments.push(file)
  return segments.join('/')
}

FilePath.prototype.push = function(dir) {
  const parts = Path.parse(this.path)
  return new FilePath(Path.join(parts.dir, dir, parts.base))
}


FilePath.prototype.shift = function(_n) {
  const n = (_n === undefined) ? 1 : _n
  const segments = this.path.split('/')
  for(let i=0; i<Math.min(n, segments.length); i++) {
    segments.shift()
  }
  return segments.join('/')
}

FilePath.prototype.unshift = function(dir) {
  const parts = Path.parse(this.path)
  return new FilePath(Path.join(dir, parts.dir, parts.base))
}


FilePath.prototype.setExt = function(ext) {
  const x = (ext && ext[0] !== '.')
    ? '.' + ext
    : ext || ''
  const parts = Path.parse(this.path)
  return new FilePath(Path.join(parts.dir, parts.name + x))
}

FilePath.prototype.setFile = function(name) {
  const parts = Path.parse(this.path)
  return new FilePath(Path.join(parts.dir, name + parts.ext))
}

FilePath.prototype.setDir = function(dir) {
  const parts = Path.parse(this.path)
  return new FilePath(Path.join(dir, parts.base))
}

FilePath.prototype.toString = function() {
  return this.path
}

module.exports = FilePath
