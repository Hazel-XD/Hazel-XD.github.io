<html>
<head>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://unpkg.com/jquery.terminal/js/jquery.terminal.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/jquery.terminal/css/jquery.terminal.min.css"/>
</head>
<body>
        <script>
                $('body').terminal({
                    hello: function(what) {
                        this.echo('Hello, ' + what +
                                  '. Wellcome to this terminal.');
                    }
                }, {
                    greetings: 'My First Terminal'
                });
                </script>
</body>
</html>