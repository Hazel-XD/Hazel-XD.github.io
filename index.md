<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="chrome=1" />
    <title>HTML5 Web Terminal</title>
    <link href="https://fonts.googleapis.com/css?family=Inconsolata"
          rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div id="container">
      <output></output>
      <div id="input-line" class="input-line">
        <div class="prompt"></div><div><input class="cmdline" autofocus /></div>
      </div>
    </div>
    
    <!--<script src="http://www.codehelper.io/api/ips/?js"></script>-->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://s.codepen.io/AndrewBarfield/pen/LEbPJx.js"></script>
    
    <div class="clock-container">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45"/>
        <g>
          <rect class="hour" x="47.5" y="12.5" width="5" height="40" rx="2.5" ry="2.55" />
          <rect class="min" x="48.5" y="12.5" width="3" height="40" rx="2" ry="2"/>
          <line class="sec" x1="50" y1="50" x2="50" y2="16" />
        </g>
      </svg>
    </div>
    
  </body>
</html>