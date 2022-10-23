const request = require('request')


const url='api.openweathermap.org/data/2.5/weather?q={city name}&appid=9025e1155624f4107a10df1a986d38f9'

request({url: url},(error,response)=>{
    const data= JSON.parse(response)
    console.log(data)
})


//   console.log('starting')

//   setTimeout(()=>{
//       console.log('2 second timer')
//   },2000)

//   setTimeout(()=>{
//     console.log(' 0 second timer')
// },0)
//   console.log('stopping')