const fs = require('fs');

module.exports = function stylusUtilsLoader(source) {
  this.cacheable();

  if (!(new RegExp(this.query.test)).test(this.context)) {
    return source;
  }

  const data = fs.readFileSync(this.query.absPath, 'utf8');

  return `${data}${source}`;
};
