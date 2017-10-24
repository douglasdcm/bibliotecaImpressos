function validar_login() {
	var chave = document.getElementById('chave').value;
	var senha = document.getElementById('senha').value;
	
	//alert(chave);
	if (chave == "") {
		alert("Preencha a chave.");
	} else if (senha == "") {
		alert("Preencha a senha.");
	} else {
		//TODO validação
		//caso o login ou senha nao seja valido, informar que login e snha são invalidos
		alert("Campos preenchidos");
	}
}
