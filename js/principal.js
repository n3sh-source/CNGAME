function raspar(documento){
    var h = document.createElement("div");
    
    var elemento = document.createElement("div");
    elemento.className = "e1";
    elemento.className+= " e";
    
    var elemento2 = document.createElement("div");
    elemento2.className = "e2";
    elemento2.className+= " e";
    
    var cont = 0;

    documento.querySelectorAll(".vspotlight:nth-child(1) article:nth-child(1)").forEach(div => {
        var pega = document.getElementById("pega");
        
        elemento.appendChild(div);
        h.appendChild(elemento);    
        
        
        
        pega.appendChild(h);
        var p = document.createElement("p");
        var caption = document.querySelectorAll(".caption");
        
        var listaC = [];
        for(let i = 0; i < caption.length; i++) {
            var txtP = caption[i].innerHTML;
            listaC [listaC.length] = txtP;
            caption[i].remove();
        }
        var divP = document.createElement("div");
        divP.className = "clsP";
        divP.appendChild(p);
        div.appendChild(divP);
        p.innerHTML = listaC;
        div.className = "grid-style";
    });

    h.id = "grid-principal";

    documento.querySelectorAll(".hspotlight:nth-child(-n+3) article:nth-child(-n+3)").forEach(div => {
        var pega = document.getElementById("pega");
        elemento2.appendChild(div);
        h.appendChild(elemento2);
        pega.appendChild(h);

        
        var p = document.createElement("p");
        var captionA = document.querySelectorAll(".e2 a");
        var caption = document.querySelectorAll(".caption");
        var lista = [];
        for (let c = 0; c < captionA.length; c++) {
            var cp = captionA[c].href;
            console.log(cp); 
            cp = cp.substr(18);
            captionA[c].href = "https://br.ign.com/" + cp;
        }
        for(let i = 0; i < caption.length; i++) {
            var txtP = caption[i].innerHTML;
            lista [lista.length] = txtP;
            caption[i].remove();

        }
       

        
        var divP = document.createElement("div");
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

