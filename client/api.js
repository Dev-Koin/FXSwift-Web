import request from 'superagent'

const getConversionUrl = 'http://data.fixer.io/api/latest?access_key=59fbf81af567c668fc4694fb20a783ba&format=1'

export function getConversion (callback) {
  request
    .get(getConversionUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}