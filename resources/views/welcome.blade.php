<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    </head>
    <body>

        <h1>Welcome back - @{{ shared.username }}</h1>

        <notification>This is a notification: </notification>

        <!-- <message @new-message="handleNewMessage"></message> -->

        <!-- <template id="tasks-template">
            <h1>My Tasks</h1>

            <ul class="list-group">
                    <li class="list-group-item" v-for="task in list">
                        @{{ task.body }}
                        <strong @click="deleteTask(task)">X</strong>
                    </li>
            </ul>
        </template> -->

        <script src="https://vuejs.org/js/vue.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.0.2/vue-resource.js"></script>
        <script src="/js/main.js"></script>

    </body>
</html>
