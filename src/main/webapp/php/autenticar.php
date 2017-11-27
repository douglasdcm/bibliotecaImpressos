<?php

$host="localhost";
$user="root";
$password="admin";
$db="biblioteca_impressos";

$con=mysqli_connect($host, $user, $password, $db);
//mysqli_select_db($con);

//echo "form ".$_POST['chave']." ".$_POST['senha']."";

if(isset($_POST['chave'])){
    
    $uname=$_POST['chave'];
    $password=$_POST['senha'];
    $sql="select * from login where chave='".$uname."' and senha='".$password."'";
    
    //echo "sql".$sql."\n";
    
    $result=mysqli_query($con, $sql);
    
    //echo "result".$result."\n";
    
    //echo "num_rows".mysqli_num_rows($result)."\n";
    
    if(mysqli_num_rows($result)==1){
        echo " You have successfully logged in";
        exit();
    }else{
        echo " You entered incorrect password";
        exit();
    }
//}else{
//    echo "POST failed";
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <title>Autenticar</title>
  </head>
  <body>
	<div class="container">
			<!--
			<form class="form-signin">
			  <label for="chave" class="sr-only">Chave</label>
			  <input id="chave" class="form-control" type="text" >
			  <br>
			  Senha:<br>
			  <input id="senha" class="form-control" type="password">
			  <br><br>
			  <input onclick="validar_login()" id="logar" type="submit" value="Logar">
			</form> 
			-->
			
                        <!--form id="autenticar" class="form-signin" method="POST" action="#"-->
                        <form id="autenticar" method="POST" action="#">
				<h2 class="form-signin-heading">Autenticação</h2>
				<label for="chave" class="sr-only">Chave</label>
				<input type="text" name="chave" id="chave" class="form-control" placeholder="Informe sua chave de usuário" required autofocus>
				<label for="senha" class="sr-only">Senha</label>
				<input type="password" name="senha" id="senha" class="form-control" placeholder="Senha" required>
				<!--
				<div class="checkbox">
				  <label>
					<input type="checkbox" value="remember-me"> Remember me
				  </label>
				</div>
				-->
				<!--button id="logar" class="btn btn-lg btn-primary btn-block" type="submit" onclick="document.getElementById('mensagem').innerHTML = 'Logado'">Logar</button-->
                                <button id="logar" type="submit" onclick="document.getElementById('mensagem').innerHTML = 'Logado'">Logar</button>
			</form>
                        <div id="mensagem"></div>
			<a href="..\index.html">Página inicial</a>
	</div> <!-- div container -->
	
	<!-- script src="..\js\autenticar.js"></script -->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  </body>
</html>
