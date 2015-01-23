define(['views/home'], 
    function(HomeView) {
    var HomeController = function() {};
    HomeController.prototype = {
        start: function() {
            HomeView.render();
        }
    };

    return new HomeController();
});