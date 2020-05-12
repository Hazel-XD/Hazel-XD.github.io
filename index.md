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
                    },
 
                
                {
                    listfiles: function(what) {
                        this.echo('The following files are available to access through this terminal. Engineering/Navigation/Secret Shit.');
                    }
                },
                
                
                {
                    greetings: 'Welcome to the HMS Aspire. Press listfiles to show a list of files'
                });
                </script>
</body>
</html>