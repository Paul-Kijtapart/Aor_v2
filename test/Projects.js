describe('PhoneListCtrl', function(){

  beforeEach(module('projects'));

  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('myProjects', {$scope:scope});

    expect(scope.test).toBe("");
  }));

});
