
var store = {

    state: {
        username: 'TomFreestone',
        first: 'Tom',
        last: 'Freestone'
    },

    updateUsername: function(username) {
        this.state.username = username;
    }
};


new Vue({
    el: 'body',

    // Some data here
    data: {
        misc: 'some data',

        // our store or shared data
        shared: store.state
    },

    components: {
        notification: {

            data: function() {
                    return store.state;
            },

            template: '<h2><slot></slot>{{ username }}</h2>'
        }
    }

});
