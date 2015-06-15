app.<%= module %>.filters.<%= classedName %> = (function(module) {
  'use strict';

  angular
    .module(module.ID, [])
    .filter('<%= prefix %><%= classedName %>', <%= classedName %>Filter);

  function <%= classedName %>Filter(logger) {
    var log = new logger('app.<%= module %>.filters.<%= classedName %>');

    return Filter;
    ////////////////////////

    function Filter(input) {
      input = input || '';

      // code goes here

      return input + 'Filter';
    }

  }

  return module;

}(app.<%= module %>.filters.add('<%= classedName %>')));
