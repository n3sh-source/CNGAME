function raspar(documento){
    var h = document.createElement("div");
    
    var elemento = document.createElement("div");
    elemento.className = "e1";
    elemento.className+= " e";
    
    var elemento2 = document.createElement("div");
    elemento2.className = "e2";
    elemento2.className+= " e";
    
    var cont = 3;
    
    documento.querySelectorAll(".hspotlight:nth-child(-n+3) article:nth-child(-n+4)").forEach(div => {
        var pega = document.getElementById("pega");
        if(cont > 2) {
            elemento.appendChild(div);
            h.appendChild(elemento);    
        }
        else {
            elemento2.appendChild(div);
            h.appendChild(elemento2);
        }
        
        cont-=1;
        
        pega.appendChild(h);

        // tummb = querySelectorAll()
        // divA = createElement("div");

        
        var p = document.createElement("p");
        var caption = document.querySelectorAll(".caption");
        var lista = [];
        for(let i = 0; i < caption.length; i++) {
            var txtP = caption[i].innerHTML;
            lista [lista.length] = txtP;
            caption[i].remove();
        }
        divP = document.createElement("div");
        divP.className = "clsP";
        divP.appendChild(p);
        div.appendChild(divP);
        p.innerHTML = lista;
        div.className = "grid-style";
    });

    h.id = "grid-principal";
};

function pegarDados(){
    //AJAX
    fetch("https://cors-anywhere.herokuapp.com/https://br.ign.com/")
        .then(resp => resp.text())
        .then(pg => {
            let dom = new DOMParser();
            let documento = dom.parseFromString(pg,"text/html");
            raspar(documento);
        })
        .catch(e => document.write(e));
};

pegarDados();

