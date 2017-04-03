const fs = require('fs')
const axios = require('axios')

const config = require('./config')

function load () {
  if (global.config.autoupdateRemoteTarget) {
    return fromUrl(global.config.REMOTE_TARGET_URL)
  } else {
    return fromFile(global.config.TARGET_FILE)
  }
}

function fromFile (file_name) {
  return Promise.resolve(fs.readFileSync(file_name))
}

function fromUrl (url) {
  return axios.get(url, {
    responseType: 'arraybuffer'
  }).then(function (response) {
    fs.writeFileSync(global.config.TARGET_FILE, response.data)
    return response.data
  })
}

module.exports = {
  load: load,
  fromFile: fromFile,
  fromUrl: fromUrl
}
