document.getElementById("image-upload-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var fileInput = document.getElementById("file-input");
    var file = fileInput.files[0];

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
    };

    fetch("https://varomnrg.xyz/uploads", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
});
