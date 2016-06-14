'use strict';
/* global define */
define(['addressfinder'], function(AddressFinder) {
  new AddressFinder.Widget(document.getElementById('address_search'), 'YOUR_KEY', 'NZ');
});
