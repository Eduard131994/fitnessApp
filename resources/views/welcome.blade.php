<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>FitnessApp</title>

        <script src="js/app.js" defer></script>
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
        <div id="app">
            <the-header></the-header>
            <router-view></router-view>
        </div>

    </body>

</html>
