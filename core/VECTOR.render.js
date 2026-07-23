class VECTOR_RENDER {

    render27(list){
        const out = document.getElementById("vector27");
        out.innerHTML = "";

        list.forEach((item, i)=>{
            const div = document.createElement("div");
            div.className = "cell";
            div.innerText = `${i+1} · ${item}`;
            div.style.top = (i*40)+"px";
            out.appendChild(div);
        });
    }

    render81(matrix){
        const out = document.getElementById("vector81");
        out.innerHTML = "";

        matrix.forEach((row, r)=>{
            row.forEach((cell, c)=>{
                const div = document.createElement("div");
                div.className = "cell small";
                div.style.left = (c*30)+"px";
                div.style.top  = (r*30)+"px";
                div.innerText = cell.iqq;
                out.appendChild(div);
            });
        });
    }
}

window.VECTOR_RENDER = new VECTOR_RENDER();
