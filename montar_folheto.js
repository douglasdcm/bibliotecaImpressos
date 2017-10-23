function criar_folheto() {

	//alert('criar folheto');
	var folheto_id = chance.guid();
	var nome = document.getElementById('nome').value;
	var descricao = document.getElementById('descricao').value;
	
	if (nome == "") {
		alert("Preencha o nome.");
	} else if (descricao == "") {
		alert("Preencha a descricao.");
	} else {
		//TODO valida��o
		//caso o login ou senha nao seja valido, informar que login e snha s�o invalidos
		//alert("Campos preenchidos");
		var txt;
		if (confirm("Gostaria de cadatrar um novo folheto?") == true) {
		
			var folheto = {
				folheto_id: folheto_id,
				nome: nome,
				descricao: descricao,
				status: 'Rascunho'
			}

			if (localStorage.getItem('folhetos') == null) {
				var folhetos = [];
				folhetos.push(folheto);
				localStorage.setItem('folhetos', JSON.stringify(folhetos));
			} else {
				var folhetos = JSON.parse(localStorage.getItem('folhetos'));
				folhetos.push(folheto);
				localStorage.setItem('folhetos', JSON.stringify(folhetos));
			}
			txt = "Novo rascunho criado.";
			
		} else {
			//TODO
			txt = "Opera��o cancelada.";
		}
		document.getElementById("mensagem").innerHTML = txt;
	}	
}
