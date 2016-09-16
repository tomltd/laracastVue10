Vue.component('tasks', {
    template: '#tasks-template',

    data: function() {
        return {
            list: []
        };
    },

    created: function() {
        this.fetchTaskList();
    },

    methods: {
        fetchTaskList() {
            this.$http.get('api/tasks').then((response) => {
            this.list = response.body;
            }, (response) => {
                console.log('Error fetching tasks');
            });
        },

        deleteTask: function(task) {
            this.list.$remove(task);
        }
    }


});


new Vue({
    el: 'body'

});
