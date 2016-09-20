


new Vue({
    el: 'body',

    components: {
        notification: {

            data: function() {
                    return { username: 'Tomltd'}
            },

            template: '<h2><slot></slot>{{ username }}</h2>'
        }
    }

});
