const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=23b17ec2ea4e7e65e637d0ec2817dd99&query=45,-74&units=f'

const request = http.request(url, (response) => {

    //let because we will reasing the value of data overtime
    let data = ''
    //registers a handler
    response.on('data', (chunk) => {
      data = data + chunk.toString()
    })

    response.on('end', () => {
      const body = JSON.parse(data)
      console.log(body)
    })

})

request.on('error', () => {
  console.log('An error ', error)
})
request.end()