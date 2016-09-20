
var store = {
    username: 'TomFreestone',
    first: 'Tom',
    last: 'Freestone'
}


new Vue({
    el: 'body',

    // Some data here
    data: {
        misc: 'some data',

        // our store or shared data
        shared: store
    },

    components: {
        notification: {

            data: function() {
                    return store;
            },

            template: '<h2><slot></slot>{{ username }}</h2>'
        }
    }

});
