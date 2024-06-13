        // JavaScript to handle form submission and update list
        document.getElementById("orderForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting
            var numero = document.getElementById("numeroInput").value;
            var direccion = document.getElementById("direccionInput").value;

            if (numero.trim() === "" || direccion.trim() === "") {
                alert("Por favor, ingrese su número y dirección.");
                return;
            }

            var listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.innerText = "Número: " + numero + ", Dirección: " + direccion;

            document.getElementById("pedidosList").appendChild(listItem);

            // Clear input fields after submission
            document.getElementById("numeroInput").value = "";
            document.getElementById("direccionInput").value = "";
        });