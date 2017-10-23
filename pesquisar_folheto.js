function listar_folhetos() {
	
	//alert("oi");
	var folhetos = JSON.parse(localStorage.getItem('folhetos'));	
	var lista_folhetos = document.getElementById('lista_folhetos');
	lista_folhetos.innerHTML = '';
	
	//var nome = "fake";
	
	//TODO
	//a lista de folhetos depende da função de cadastramento
	var tabela = '<table class="table table-striped" style="width:100%">' +
										'<tr>' +
											'<th>ID</th>' +
											'<th>Nome</th>' +
											'<th>Descrição</th>' +
											'<th>Status</th>' +
										'</tr>';

	for (var i = folhetos.length-1; 0 <= i; i--) {
	//for (var i = 0; i < folhetos.length; i++) {
		var folheto_id = folhetos[i].folheto_id;
		var nome = folhetos[i].nome;
		var descricao = folhetos[i].descricao;
		var status = folhetos[i].status;
			
		tabela += '<tr>' +
					//'<td><a href="visualizar_folheto.html" onclick="ver_folheto()">' + nome + '</a></td>' +
					'<td>' + folheto_id + '</td>' +
					'<td><a href="javascript:;" onclick="ver_folheto(\'' + folheto_id + '\');">' + nome + '</a></td>' +
					'<td>' + descricao + '</td>' +
					'<td>' + status + '</td>' +
				'</tr>';
		
	}
	
	tabela += '</table>'
	
	lista_folhetos.innerHTML = tabela;
	
}

/*function ver_folheto(nome){
	var 
	document.location = 'visualizar_folheto.html';
}*/

function ver_folheto(folheto_id) {
	/*
	if (localStorage.getItem('folhetos') != null) {
		var folhetos = JSON.parse(localStorage.getItem('folhetos'));
		var filtered_json = find_in_object(folhetos, {nome: nome});
		//alert(filtered_json[0].nome + ' ' + filtered_json[0].descricao);
		
		document.location = 'visualizar_folheto.html';
	}
	*/
	
	//setCookie("nome", nome, 1);
	setCookie("folheto_id", folheto_id, 1);
	//alert(getCookie("nome"))
	document.location = 'visualizar_folheto.html';
	
}

//get from: https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//get from: https://www.w3schools.com/js/js_cookies.asp
/*function getCookie(cname) {
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
}*/

/*
//get from: https://stackoverflow.com/questions/23720988/how-to-filter-json-data-in-javascript-or-jquery
function find_in_object(my_object, my_criteria){

  return my_object.filter(function(obj) {
    return Object.keys(my_criteria).every(function(c) {
      return obj[c] == my_criteria[c];
    });
  });
}*/
