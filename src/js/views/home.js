define(['jquery', 'backbone', 'templates/jst'], function($, Backbone, tmplts) {
    var HomeView = Backbone.View.extend({
        el: '#content',
        events: {},

        render: function() {
            this.$el.html(JST['src/js/templates/home.html']({}));
        }
    });

    return new HomeView();
});