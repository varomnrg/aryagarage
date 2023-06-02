const url = "https://varomnrg.xyz/uploads/images"; // Replace with the actual API URL

const div = document.querySelector(".galeri");

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((link) => {
            const styleDiv = document.createElement("div");
            styleDiv.classList.add("col-md-3", "margin_bottom");

            const imageDiv = document.createElement("div");
            imageDiv.classList.add("work");

            const figure = document.createElement("figure");
            const image = document.createElement("img");
            image.src = "https://" + link;
            image.alt = "#";

            image.style.width = "250px";
            image.style.height = "250px";
            image.style.objectFit = "cover";
            image.style.borderRadius = "5%";

            figure.appendChild(image);
            imageDiv.appendChild(figure);
            styleDiv.appendChild(imageDiv);
            div.appendChild(styleDiv);
        });
    })
    .catch((error) => {
        console.log(error);
    });
