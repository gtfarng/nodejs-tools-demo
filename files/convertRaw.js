let dataRaw='{	"name":"jatupat",	"surname":"pannoi",	"age":24,	"job":"Developer"}'

console.log(dataRaw)

let dataJson = JSON.parse(dataRaw)

console.log(dataJson.name)
console.log(dataJson.surname)
console.log(dataJson.age)
console.log(dataJson.job)
