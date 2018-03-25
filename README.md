Request Header Parser Microservice
==========================

The second freeCodeCamp API Project for the Back-End curriculum. 

## User Stories

* I can get the IP address, language and operating system for my browser.

## How to use?

1. Visit [https://endurable-sky.glitch.me/api/whoami](https://endurable-sky.glitch.me/api/whoami)
2. You receive this type of output: `{ "ipaddress": 1.2.3.4.5, 
"language": "en-US" , "software": "OS: Windows 10.0, Browser: Firefox"}`

## Tech/Framwork
* NodeJS
* Express
* cors
* body-parser
* express-useragent
* Glitch
* Github

## Issues

### Issue
The ip address being outputted was incorrect.

### Solution
I searched for 'correct ip address express' on DuckDuckGo. I found a Stack
Overflow that mentioned a solution. The author mentioned the express proxy docs
[express proxies](http://expressjs.com/en/guide/behind-proxies.html).

## API Reference
 
[Express.js 4.x](https://expressjs.com/en/4x/api.html)

## Credits
Haozhun's Solution [Stack Overflow](https://stackoverflow.com/questions/10849687/express-js-how-to-get-remote-client-address)
