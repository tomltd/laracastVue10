<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    </head>
    <body>
        <div class="container">
            <tasks></tasks>
        </div>

        <template id="tasks-template">
            <h1>My Tasks</h1>

            <ul class="list-group">
                    <li class="list-group-item" v-for="task in list">
                        @{{ task.body }}
                    </li>
            </ul>
        </template>

        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="https://vuejs.org/js/vue.js"></script>
        <script src="/js/main.js"></script>

    </body>
</html>
