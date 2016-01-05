namespace <%= prefix %>.<%= cameledName %>.test {
  'use strict';

  describe(`Midway: ${NAMESPACE}.`, () => {
    var app: ng.IModule;
    var appDeps: string[];
    var module: ng.IModule;
    var appHasModule = m => appDeps.indexOf(m) >= 0;

    before(() => {
      app = angular.module('<%= prefix %>');
      appDeps = app.value('<%= prefix %>').requires;
      module = angular.module(NAMESPACE);
    });

    it('should be registered', () => should.exist(module));

    it('should be registered in the app module', () => expect(appHasModule(NAMESPACE)).to.equal(true));

    describe('Dependencies: ', () => {
      var deps: string[];
      var hasModule = m => deps.indexOf(m) >= 0;
      before(() => deps = module.value(NAMESPACE).requires);

      // it('should have <%= prefix %>.<%= cameledName %>.Nobody as a dependency', () => expect(hasModule('<%= prefix %>.<%= cameledName %>.Nobody')).to.equal(true));
    });
  });
}
