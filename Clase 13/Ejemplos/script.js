const sala = [
            ["libre", "ocupado", "ocupado"],
            ["libre", "ocupado", "ocupado"],
            ["ocupado", "libre", "libre"]
        ];

const contenedor = document.getElementById("sala");

function renderizarSala() {
    contenedor.innerHTML = "";
    
    for (let fila = 0; fila < sala.length; fila++) {
        for (let col = 0; col < sala[fila].length; col++) {
            const estado = sala[fila][col];
            const btn = document.createElement("button");
            btn.textContent = estado;
            btn.className = "butaca" + (estado === "ocupado" ? " ocupado" : "");
            btn.disabled = estado === "ocupado";

            // Reservar al hacer click
            btn.onclick = () => {
                sala[fila][col] = "ocupado";
                alert("✅ ¡Reserva exitosa!");
                renderizarSala();
            };

            contenedor.appendChild(btn);
            
        }
        
    }
    
}

renderizarSala();