const dotenv = require('dotenv')

const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)



const config = require("platformsh-config").config();

console.log(config.isValidPlatform())

// console.log("https://www.backend.pr-1-djjnuwy-muwzogvpcpoe2.eu-3.platformsh.site")
//
// var backend_route = config.getRoute("strapi").url
// console.log(backend_route)
// console.log(backend_route.substring(0, backend_route.length - 1))
