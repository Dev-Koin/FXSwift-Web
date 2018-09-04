import request from 'superagent'

const getConversionUrl = 'https://api.exchangeratesapi.io/latest'

export function getConversionUrl (callback) {
  request
    .get(getConversionUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}