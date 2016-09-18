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

Vue.component('message', {

    template: '<input v-model="message" @keyup.enter="storeMessage"></input>',

    data: function () {
      return { message: '' }
  },

    methods: {
            storeMessage : function() {
            console.log('storing ' + this.message);

            // Send the message up to the parent component
            this.$dispatch('new-message', this.message);

            // Clear out the input.
            this.message = '';
        }
    }
});


new Vue({
    el: 'body',

    data: {
        messages: [],
    },

    methods: {
        handleNewMessage: function(message) {
            console.log('Parent recieves new message ' + message);
            this.messages.push(message);
        }

    }

});
