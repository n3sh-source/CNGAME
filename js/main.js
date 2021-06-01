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

    var div_img = document.createElement('div');
    div_img.setAttribute('class', 'img_secundaria');

    var img = document.createElement('img');
    img.setAttribute('class', 'img_div_sec');

    //feed-post-body feed-post-link
	documento.querySelectorAll(".feed-post-body").forEach(div => {
        var noticia = document.createElement('div');
        noticia.setAttribute('class', 'box_secundaria');
        

		noticia.appendChild(div);

        ref.appendChild(noticia);
	});
};


window.onload = NSPegarDados;