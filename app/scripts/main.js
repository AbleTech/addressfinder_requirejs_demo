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

require(['form'], function() {});
