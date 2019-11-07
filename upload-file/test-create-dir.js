const fs= require('fs')

const mkdirRecursive = function(path, callback) {
  let controlledPaths = []
  let paths = path.split(
    '/' // Put each path in an array
  ).filter(
    p => p != '.' // Skip root path indicator (.)
  ).reduce((memo, item) => {
    // Previous item prepended to each item so we preserve realpaths
    const prevItem = memo.length > 0 ? memo.join('/').replace(/\.\//g, '')+'/' : ''
    controlledPaths.push('./'+prevItem+item)
    return [...memo, './'+prevItem+item]
  }, []).map(dir => {
    fs.mkdir(dir, err => {
      if (err && err.code != 'EEXIST') throw err
      // Delete created directory (or skipped) from controlledPath
      controlledPaths.splice(controlledPaths.indexOf(dir), 1)
      if (controlledPaths.length === 0) {
        return callback()
      }
    })
  })
}

// Usage
mkdirRecursive('./Doctornote/tmp', () => {
  console.log('Directories created succesfully!')
})