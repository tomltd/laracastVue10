<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    </head>
    <body>
        <div class="container">
            <h1>My Tasks</h1>
            <ul class="list-group">
                @foreach ($tasks as $task)
                    <li class="list-group-item">
                        {{ $task->body }}
                    </li>
                @endforeach
        </div>
    </body>
</html>
