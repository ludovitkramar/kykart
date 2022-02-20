<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="author" content="Unknown" />
    <meta name="robots" content="follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
    <title>Track</title>
    <style>
        table {
            border: 1px solid grey;
            border-collapse: collapse;
        }

        td {
            border: 1px solid grey;
        }

        th {
            border: 1px solid grey;
        }

        body {
            display: flex;
            justify-content: center;
        }

        div.main {
            width: 700px;
            max-width: 100%;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
        }
    </style>
</head>

<body id="body">
    <div class="main">
        <h1>Track</h1>
        <h3>Information extraction test</h3>
                
        
        <span style="display: none;">
        <?php
            echo $_SERVER['REMOTE_ADDR'];
            echo "<br />";
            echo $_SERVER['HTTP_X_FORWARDED_FOR'];
            echo "<br />";
        ?>
        </span>
        <span id="browser"></span>
        <!--<br />
        <button onclick="document.getElementById('out').innerHTML = eval(document.getElementById('functionName').value)">Test function:</button>
        <input type="text" id="functionName"></input>
        <p id="out"></p>-->
    </div>
</body>
<script type="text/javascript" src="greetings.js"></script>
</html>
