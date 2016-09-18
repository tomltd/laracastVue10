<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    </head>
    <body>


        <ul>
            <li v-for="person in people | role 'Student'">@{{ person.name }}</li>
        </ul>

        <div class="container">
            <tasks></tasks>
        </div>

        <template id="tasks-template">
            <h1>My Tasks</h1>

            <ul class="list-group">
                    <li class="list-group-item" v-for="task in list">
                        @{{ task.body }}
                        <strong @click="deleteTask(task)">X</strong>
                    </li>
            </ul>
        </template>

        <script src="https://vuejs.org/js/vue.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.0.2/vue-resource.js"></script>
        <script src="/js/main.js"></script>

    </body>
</html>
