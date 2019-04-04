# 5-Day Weather Forecast
A simple application to display 5-day weather forecast using the OpenWeatherMap API. Built on top of [create-react-app Starter Kit](https://github.com/facebook/create-react-app)
App is developed with Redux and Sass. Configured with Webpack. Testing environment is [jest-enzyme]. 

### Demo
https://kranthikumars.github.io/weather-forecast-with-react/

## Pre-requisites
* Node.js 9.8.0 and above

## Run
```
git clone https://github.com/KranthiKumarS/weather-forecast-with-react
cd weather-forecast-with-react
npm i
```


## Start the dev server
```

npm run start

```

## Build
```

npm run build

```

#### Notes:
* Running the build bundles all your updates to ```bundle.js``` and ```bundle.css``` in dist folder.
* If you insist to automate the build upon appending changes to files, use ```webpack --watch```

## Test
```

npm run test

```

#### Notes:
* Unit testing can be done manually by executing the above command.
* It will be done automatically prior committing the updates to the repo as a pre-commit hook.

### What taken care
- [x] Provide an option for user to choose location of their choice by Name
- [x] Unit testing
- [x] Identify and address edgecases
- [x] Taken care of data sorting, looping, searching etc
- [x] Taken care of use a proper loading spinner icon on page load while data fetching
- [x] Detect location automatically
- [x] Display hourly forecasts for each day

### What could be done with more time
- [ ] Display higher-level of weather information such as Wind Speed, Precipitation etc
- [ ] Better work on more config the eslintrc to reduce warnings and errors and to support "no-vars-used" for Imports etc
- [ ] Better and more functional UI
- [ ] Prevent fetching new data on every refresh by caching the data for a set duration of session

### Tech Stack

* React.js
* Redux
* JavaScript (ES6)
* HTML5
* SASS
* Jest + Enzyme
