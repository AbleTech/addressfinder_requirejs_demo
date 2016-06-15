# AddressFinder RequireJS Demo

This project is designed to simply show how AddressFinder can be included with
an AMD library, in this case RequireJS.

### Setup

```
npm install
grunt server
```

### Dependencies
- [reqwest](https://github.com/ded/reqwest) - Mirco library for ajax requests.
- [neat-complete](https://github.com/AbleTech/neat-complete) - The core
autosuggest library for AddressFinder.

_both available via bower_

### RequireJS config

`/app/scripts/main.js`
```js
require.config({
  shim:{
    'addressfinder': {
      deps: ['reqwest', 'neat_complete']
    }
  },
  paths: {
    'addressfinder': 'https://api.addressfinder.io/assets/v3/core',
    'reqwest': '../../bower_components/reqwest/reqwest',
    'neat_complete': '../../bower_components/neat-complete/lib/neat_complete'
  }
});
```

### Build config
`build.js`
```js
({
    baseUrl: "app/scripts",
    paths: {
      "addressfinder": "empty:"
    },
    name: "main",
    mainConfigFile: 'app/scripts/main.js',
    out: "dist/scripts/main.js"
})

```
