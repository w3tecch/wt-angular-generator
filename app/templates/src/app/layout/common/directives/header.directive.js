/**
 * @namespace layout
 */
(function () {
  'use strict';

  angular
    .module( 'common.directive.header', [] )
    .directive( '<%= prompts.prefix %>Header', HeaderDirective );

  /**
   * @memberOf layout
   * @namespace gaHeader
   *
   * @description
   * Header element outside of the ngView area
   *
   * @example
   * <<%= prompts.prefix %>-header></<%= prompts.prefix %>-header>
   *
   * @constructor
   */
  function HeaderDirective() {
    return {
      restrict: 'EA',
      templateUrl: 'app/layout/common/directives/header.directive.html',
      controller: HeaderController,
      controllerAs: 'header',
      bindToController: true // because the scope is isolated
    };
  }

  /**
   * @memberOf layout.<%= prompts.prefix %>Header
   * @name HeaderController
   *
   * @constructor
   */
  function HeaderController() {
    var vm = this;
    vm.title = appUtil.title;
  }

}());
