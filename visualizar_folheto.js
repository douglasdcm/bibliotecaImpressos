function exibir_detalhes_folheto () {
	var detalhe = document.getElementById('folheto_detalhe');	
	var folheto_id = getCookie("folheto_id");
	var descricao;
	var status;
	var tabela;
	
	if (localStorage.getItem('folhetos') != null) {
		var folhetos = JSON.parse(localStorage.getItem('folhetos'));
		var filtered_json = find_in_object(folhetos, {folheto_id: folheto_id});
		//alert(filtered_json[0].nome + ' ' + filtered_json[0].descricao);
		
		//document.location = 'visualizar_folheto.html';
	}
	
	folheto_id = filtered_json[0].folheto_id;
	nome = filtered_json[0].nome;
	descricao = filtered_json[0].descricao;
	status = filtered_json[0].status;
	
	tabela = '<table class="table table-striped" style="width:100%">' +
										'<tr>' +
											'<th>Nome</th>' +
											'<th>Descrição</th>' +
											'<th>Status</th>' +
											'<th>Ações</th>' +
											'<th>Componentes</th>' +
										'</tr>';
	
	tabela += '<tr>' +
					'<td>' + nome + '</a></td>' +
					'<td>' + descricao + '</td>' +
					'<td>' + status + '</td>' +
					'<td><a id="acoes" href="javascript:;" onclick="fluxo_aprovacao(\'' + folheto_id + '\');">Solicitar aprovacao de montagem</a></td>' +
					'<td><a href="manter_componente.html">Ir para componentes...</a></td>' +
				'</tr>';
	
	//detalhe.innerHTML += '<p>nome: ' + filtered_json[0].nome + ' descrição: ' + filtered_json[0].descricao +'</p>';
	detalhe.innerHTML = tabela;

	listar_comentarios(folheto_id);
	
}

function listar_comentarios(folheto_id) {
		
	var comentarios = JSON.parse(localStorage.getItem('comentarios'));	
	var lista_comentarios = document.getElementById('lista_comentarios');
	lista_comentarios.innerHTML = '';
	
	var tabela = '<table class="table table-striped" style="width:100%">' +
										'<tr>' +
											'<th>ID</th>' +
											'<th>Comentário</th>' +
											'<th>Atualizar</th>' +
											'<th>Deletar</th>' +
										'</tr>';
											
	//for (var i = 0; i < comentarios.length; i++) {
	for (var i = comentarios.length-1; 0 <= i; i--) {
		if (comentarios[i].folheto_id == folheto_id){
			var comentario_id = comentarios[i].comentario_id;
			var texto = comentarios[i].texto;
				
			tabela += '<tr>' +
						'<td><small>' + comentario_id + '</small></td>' +
						'<td>' + texto + '</td>' +
						'<td><button type="button" onclick="atualizar_comentario(\'' + comentario_id + '\')">Atualizar</button></td>' +
						'<td><button type="button" onclick="deletar_comentario(\'' + comentario_id + '\')">Deletar</button></td>' +
					'</tr>';
			
		}
	}
	
	tabela += '</table>'
	
	lista_comentarios.innerHTML = tabela;
	
}

function adicionar_comentario() {

	var campo_comentario = document.getElementById('campo_comentario').value;
	var folheto_id = getCookie("folheto_id");
	
	if (campo_comentario == "") {
		alert("Insira um comentário.");
	} else {
		//var txt;
		if (confirm("Gostaria de cadatrar um novo cometário?") == true) {
		
			var comentario_id = chance.guid();
			var comentario = {
				comentario_id: comentario_id,
				folheto_id: folheto_id,
				texto: campo_comentario
			}

			if (localStorage.getItem('comentarios') == null) {
				var comentarios = [];
				comentarios.push(comentario);
				localStorage.setItem('comentarios', JSON.stringify(comentarios));
			} else {
				var comentarios = JSON.parse(localStorage.getItem('comentarios'));
				comentarios.push(comentario);
				localStorage.setItem('comentarios', JSON.stringify(comentarios));
			}
			//txt = "Novo rascunho criado.";
			//lista_comentarios.innerHTML += '<p>' + campo_comentario + '</p>';
			campo_comentario.value = '';
			listar_comentarios();
			
		} //else {
			//TODO
			//txt = "Operação cancelada.";
		//}
		//document.getElementById("mensagem").innerHTML = txt;
		
		
	}	
}

function atualizar_comentario(comentario_id){
//alert('atualizar ' + comentario_id);
	var campo_comentario = document.getElementById('campo_comentario').value

	if (campo_comentario == "") {
		alert("Insira um comentário.");
	} else {
		if (confirm("Gostaria de atualizar o comentário?") == true) {
	
			if (localStorage.getItem('comentarios') != null) {
				var comentarios = JSON.parse(localStorage.getItem('comentarios'));
				for (var i = 0; i < comentarios.length; i++) {
					if (comentarios[i].comentario_id == comentario_id) {
						comentarios[i].texto = document.getElementById('campo_comentario').value;
					}
				}
				localStorage.setItem('comentarios', JSON.stringify(comentarios));
				campo_comentario.valeu = '';
				listar_comentarios();
			}
		}
	}

}

function deletar_comentario(comentario_id){
//function deletar_comentario(texto){
	//alert('deletar ' + texto);
	
	if (confirm("Gostaria de deletar o comentário?") == true) {
	
		if (localStorage.getItem('comentarios') != null) {
			var comentarios = JSON.parse(localStorage.getItem('comentarios'));
			for (var i = 0; i < comentarios.length; i++) {
				if (comentarios[i].comentario_id == comentario_id) {
					comentarios.splice(i, 1);
				}
			}
			localStorage.setItem('comentarios', JSON.stringify(comentarios));
			listar_comentarios();
		}
	}
	
	/*
	if (confirm("Gostaria de deletar o comentário " + texto + "?") == true) {

		if (localStorage.getItem('comentarios') != null) {
			var comentarios = JSON.parse(localStorage.getItem('comentarios'));
			for (var i = 0; i < comentarios.length; i++) {
				if (comentarios[i].texto == texto) {
					comentarios.splice(i, 1);
				}
			}
			localStorage.setItem('comentarios', JSON.stringify(comentarios));
			listar_comentarios();
		}
	}*/
}

/*function adicionar_comentarioOLD(){
	var comentario = document.getElementById('campo_comentario').value;
	var lista_comentarios = document.getElementById('lista_comentarios')
	
	var comentario_json = {
			texto: 'comentario',
			teste: 'teste'
			}

			if (localStorage.getItem('comentarios') == null) {
				var comentario = [];
				comentario.push(comentario_json);
				localStorage.setItem('comentarios', JSON.stringify(comentario_json));
			} else {
				var comentario_json = JSON.parse(localStorage.getItem('comentarios'));
				comentario_json.push(comentario);
				localStorage.setItem('comentarios', JSON.stringify(comentario_json));
			}
	
	lista_comentarios.innerHTML += '<p>' + comentario + '</p>';
}*/

//get from: https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


//get from: https://stackoverflow.com/questions/23720988/how-to-filter-json-data-in-javascript-or-jquery
function find_in_object(my_object, my_criteria){

  return my_object.filter(function(obj) {
    return Object.keys(my_criteria).every(function(c) {
      return obj[c] == my_criteria[c];
    });
  });
}

function fluxo_aprovacao (folheto_id) {
	
	var folhetos = JSON.parse(localStorage.getItem('folhetos'));
	var filtered_json = find_in_object(folhetos, {folheto_id: folheto_id});
	status = filtered_json[0].status;
	var acoes = document.getElementById('acoes').innerHTML;
	
	switch (acoes.toUpperCase()) {
    case "SOLICITAR APROVACAO DE MONTAGEM":
        status = "Aguardando aprovacao de montagem";
        break;
    case "SOLICITAR APROVAÇÃO DE DIAGRAMACAO ":
        status = "Aguardando aprovação de diagramacao";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
	}
	
	filtered_json[0].status = status;
	//alert(filtered_json[0].status);
	
}