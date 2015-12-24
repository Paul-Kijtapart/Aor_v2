describe('projects', function() {

    beforeEach(module('projects'));

    it('check synchronization', inject(function($controller) {
        var scope = {},
            ctrl = $controller('myProjects', {
                $scope: scope
            });
        expect(scope.test).toBe("projects");
    }));

});
