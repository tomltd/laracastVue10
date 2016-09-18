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

Vue.filter('role', function(value, role) {
    return value.filter(function(item) {
        return item.role == role;
    });
});


new Vue({
    el: 'body',

    data: {
        people: [
            { name: 'Tom', role: 'Admin' },
            { name: 'Morris', role: 'Student' },
            { name: 'Kitty', role: 'Admin' },
            { name: 'Liz', role: 'Student' }

        ]
    }

});
