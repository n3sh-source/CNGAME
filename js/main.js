//Feito por: Gustavo Costa Arakaki - TP-P2-PSI - FATEC-RL
//Feito por: Luca Pedro de Oliveira - TP-P2-PSI - FATEC-RL

//Section Secundária
function NSPegarDados(){
	fetch("https://cors-anywhere.herokuapp.com/https://g1.globo.com/pop-arte/games/")
		.then(resp => resp.text())
		.then(ns => {
			let dom = new DOMParser();
			let documento = dom.parseFromString(ns,"text/html");
			NSraspar(documento);
		})
		.catch(e => document.write(e));
};

function NSraspar(documento){
    var ref = document.getElementById('flex_secundaria');

    //feed-post-body feed-post-link
	documento.querySelectorAll(".feed-post-body").forEach(div => {
		//Esqueleto da notícia
        var noticia = document.createElement('div');
        noticia.setAttribute('class', 'box_secundaria');
        
			//Secundaria img
		var div_img = document.createElement('div');
    	div_img.setAttribute('class', 'img_secundaria');

    	var img = document.createElement('img');
    	img.setAttribute('class', 'img_div_sec');

			//Secundaria info
		var div_info_secundaria = document.createElement('div');
		div_info_secundaria.setAttribute('class', 'info_secundaria');
				//Secundaria texto
		var texto_secundaria = document.createElement('div');
		texto_secundaria.setAttribute('class', 'texto_secundaria');

		var p_texto_secundaria = document.createElement('p');

				//Secundaria categoria e data
		var cat_data = document.createElement('div');
		cat_data.setAttribute('class', 'cat_data');

		var cat = document.createElement('div');
		cat.setAttribute('class', 'cat');

		var p_cat = document.createElement('p');
				//Data
		var data = document.createElement('div');
		data.setAttribute('class', 'data');

		var p_data = document.createElement('p');

		var span = document.querySelectorAll(".feed-post-datetime");
		for (let i = 0; i < span.length; i++) {
			p_data.innerHTML = span[i];
		}

		

		data.appendChild(p_data);
		cat.appendChild(p_cat);
		cat_data.appendChild(cat);
		cat_data.appendChild(data);
		texto_secundaria.appendChild(p_texto_secundaria);
		div_info_secundaria.appendChild(texto_secundaria);
		div_info_secundaria.appendChild(cat_data);
		div_img.appendChild(img);

		noticia.appendChild(div_img);
		noticia.appendChild(div_info_secundaria);

		//noticia.appendChild(div);

        ref.appendChild(noticia);
	});
};


window.onload = NSPegarDados;