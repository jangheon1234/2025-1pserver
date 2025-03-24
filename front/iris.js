      function drawChart(prob, pid) {

        var data = google.visualization.arrayToDataTable([
          ['iris species', 'prob'],
          ['setosa', prob[0][0]],
          ['varsicolor', prob[0][1]],
          ['varginica', prob[0][2]]
        ]);

        var options = {
          title: '붓꽃 품종 확률',
          pieHole: 0.4
        };

        var chart = new google.visualization.PieChart(document.getElementById('pid'));

        chart.draw(data, options);
      }
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
        txtOut.value = response.prediction + "일 확률:" +  response.probability
        google.charts.setOnLoadCallback(drawChart(response.probability, document.getElementById('piechart')));

    })
    .fail(function (error) {
        console.log(error);
    })
    .always(function (response) {
        console.log(response);
    });
}
