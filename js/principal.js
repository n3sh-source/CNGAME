function raspar(documento){
    var h = document.createElement("div");
    documento.querySelectorAll(".hspotlight:nth-child(-n+3) article:nth-child(-n+4)").forEach(div => {
        var pega = document.getElementById("pega");
        var h2 = document.createElement("div");
        h2.appendChild(div)
        h.appendChild(h2);

        // h.appendChild(div);
        
        pega.appendChild(h);
        var u = documento.querySelectorAll(".hspotlight:nth-child(-n+3) article:nth-child(-n+4)");
        var p = document.createElement("p");
        var caption = document.querySelectorAll(".caption");
        var lista = [];
        for(let i = 0; i < caption.length; i++) {
            var txtP = caption[i].innerHTML;
            lista [lista.length] = txtP;
            caption[i].remove();
        }
        div.appendChild(p);
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

