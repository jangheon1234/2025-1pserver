function Send() {
    txtOut = document.getElementById("txtOut");
    s1 = document.getElementById("sl").value;
    s2 = document.getElementById("sw").value;
    s3 = document.getElementById("pl").value;
    s4 = document.getElementById("pw").value;
    const data = {
        sepal_length: s1,
        sepal_width: s2,
        petal_length: s3,
        petal_width: s4
    };

    const API_BASE_URL = "http://127.0.0.1:8000";
    const endpoint = `${API_BASE_URL}/predict`;

    $.ajax({
        type: "POST",
        url: endpoint,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data),
    })
    .done(function (response) {
        txtOut.value = response.prediction
        console.log(response);
    })
    .fail(function (error) {
        console.log(error);
    })
    .always(function (response) {
        console.log(response);
    });
}
