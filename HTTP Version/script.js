var colorGenerator;

function* generateColors(colors) {
    let i = 0;
    // Load all elements that need to be manipulated from the DOM
    let color_name = document.getElementById("color-name");
    let color_category = document.getElementById("color-category");
    let color_type = document.getElementById("color-type");
    let color_rgb = document.getElementById("color-rgb");
    let color_hex = document.getElementById("color-hex");
    let color_demo = document.getElementById("color-demo");

    while (true) {
        currColor = colors[i++ % colors.length];

        color_name.innerHTML = currColor["color"];
        color_category.innerHTML = "Color Category: " + currColor["category"];
        color_type.innerHTML = "Color Type: " + currColor["type"];
        color_rgb.innerHTML = "Color RGB: " + currColor["code"]["rgba"];
        color_hex.innerHTML = "Color HEX: " + currColor["code"]["hex"];
        color_demo.style.backgroundColor = currColor["code"]["hex"];

        yield;
    }

}

function downloadColors() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse response into JSON
            let response_json = JSON.parse(this.responseText);

            // Load color array into generator
            colorGenerator = generateColors(response_json["colors"]);
            // Start iterating through the colors
            colorGenerator.next(); 

            // Make table visible
            document.getElementById('color-disp').style.display = "inline";
            // Enable next color btn
            document.getElementById('next-color').disabled = false; 
        }
    };

    xhttp.open("GET", "colors.json", async=true);
    xhttp.send();
}
