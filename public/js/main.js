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
            var resource = this.$resource('api/tasks/{id}');


            resource.get().then((response) => {
            this.list = response.body;
            console.log(response.body);
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
