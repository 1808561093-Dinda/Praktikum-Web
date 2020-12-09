<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Login</title>
    <style>
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
        body {
        background-image: linear-gradient(to right, #0cb9cf, #49ac7a, #08632e);
        font-family: 'Open Sans', sans-serif;
        }

        .login {
        width: 400px;
        margin: 10% auto;
        font-size: 16px;
        }

        .login-header,
        .login p {
        margin-top: 0;
        margin-bottom: 0;
        }

        .login-header {
        background: rgba(255, 255, 255, 0.3);
        padding: 20px;
        font-size: 1.4em;
        font-weight: normal;
        text-align: center;
        text-transform: uppercase;
        color: black;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        }

        .login-container {
        background:  rgba(255, 255, 255, 0.11);
        padding: 12px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        }

        .login p {
        padding: 12px;
        }

        .login input {
        box-sizing: border-box;
        display: block;
        width: 100%;
        border-width: 1px;
        border-style: solid;
        padding: 16px;
        outline: 0;
        font-family: inherit;
        font-size: 0.95em;
        }

        .login input[type="email"],
        .login input[type="password"] {
        background: #fff;
        border-color: #bbb;
        color: #555;
        }

        .login input[type="email"]:focus,
        .login input[type="password"]:focus {
        border-color: #888;
        }

        .login input[type="submit"] {
        background:rgb(28, 206, 102);
        border-color: transparent;
        color: black;
        cursor: pointer;
        }

        .login input[type="submit"]:hover {
        background: rgb(10, 104, 65);
        }

        .login input[type="submit"]:focus {
        border-color: rgb(10, 104, 65);
        }
    </style>
</head>

<body>
<?php 
	if(isset($_GET['pesan'])){
		if($_GET['pesan']=="gagal"){
			echo "<script>alert('Username dan Password tidak sesuai !');</script>";
		}
	}
	?>
    <div class="login">
        <h2 class="login-header">Log in</h2>
        <form class="login-container" action="cek_login.php" method="post">
          <p><input type="text" name="username" placeholder="Username" required></p>
          <p><input type="password" name="password" placeholder="Password" required></p>
          <p><input type="submit" value="Log in"></p>
        </form>
      </div>
</body>
</html>