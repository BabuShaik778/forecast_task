const ctx = document.getElementById("forecastChart").getContext("2d");
let forecastChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "Predicted Price",
            data: [],
            borderColor: "#6a11cb",
            backgroundColor: "rgba(106,17,203,0.2)",
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        }
    }
});

document.getElementById("predictForm").addEventListener("submit", async function(e){
    e.preventDefault();
    const formData = new FormData(this);

    const response = await fetch("/predict", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    document.getElementById("result").innerText = "Predicted Price: " + data.prediction;

    // Update chart
    forecastChart.data.labels.push(formData.get("month") + "/" + formData.get("year"));
    forecastChart.data.datasets[0].data.push(data.prediction);
    forecastChart.update();
});
