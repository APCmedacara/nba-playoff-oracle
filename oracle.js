fetch('predictions.json')
.then(response => response.json())
.then(data => {
    let html = "<table border='1' style='border-collapse:collapse;'>";
    html += "<tr><th>Team</th><th>Playoff Chance</th></tr>";

    data.forEach(team => {
        html += `<tr>
                    <td>${team.Team}</td>
                    <td>${team.Probability}%</td>
                 </tr>`;
    });

    html += "</table>";
    document.getElementById("oracle").innerHTML = html;
})
.catch(() => {
    document.getElementById("oracle").innerHTML = "Failed to load predictions.";
});
