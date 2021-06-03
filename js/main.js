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
	var qt_noticas = documento.querySelectorAll(".feed-post-body");

	for(let i = 0; i< qt_noticas.length; i++){
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
		

		var span = documento.querySelectorAll(".feed-post-datetime");
		p_data.innerHTML = span[i].innerHTML;

		var span2 = documento.querySelectorAll(".feed-post-metadata-section");
		p_cat.innerHTML = span2[i].innerHTML;

		var ti = documento.querySelectorAll(".feed-post-link");
		texto_secundaria.innerHTML = ti[i].innerHTML;

		var imgs = documento.querySelectorAll(".bstn-fd-cover-picture");
		div_img.innerHTML = imgs[i].innerHTML
		

		data.appendChild(p_data);
		cat.appendChild(p_cat);
		cat_data.appendChild(cat);
		cat_data.appendChild(data);
		div_info_secundaria.appendChild(texto_secundaria);
		div_info_secundaria.appendChild(cat_data);

		noticia.appendChild(div_img);
		noticia.appendChild(div_info_secundaria);

		ref.appendChild(noticia);
	};
		

		//noticia.appendChild(div);

        
};


window.onload = NSPegarDados;