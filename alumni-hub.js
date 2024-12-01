var map = L.map('map').setView([20.0, 0.0], 2);

// Load and display a tile layer on the map (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Alumni Data
var cityData = [
    { "city": "New York", "lat": 40.7128, "lng": -74.0060, "count": 50, "alumni": ["John Doe", "Jane Smith", "Michael Adams", "Sophia Johnson"] },
    { "city": "Toronto", "lat": 43.65107, "lng": -79.347015, "count": 30, "alumni": ["Chris Evans", "Emily Johnson", "Nathan Brown", "Olivia Martin"] },
    { "city": "London", "lat": 51.5074, "lng": -0.1278, "count": 40, "alumni": ["Michael Brown", "Sarah Wilson", "Daniel Garcia", "Mia White"] },
    { "city": "Dubai", "lat": 25.2048, "lng": 55.2708, "count": 25, "alumni": ["David Clark", "Emma Martinez", "Liam Taylor", "Ella Walker"] },
    { "city": "Sydney", "lat": -33.8688, "lng": 151.2093, "count": 20, "alumni": ["Daniel Thompson", "Sophia Roberts", "Ava Allen", "Jacob Hall"] },
    { "city": "Gurugram", "lat": 28.46, "lng": 77.03, "count": 2786, "alumni": ["Arjun Patel", "Meera Singh", "Ravi Desai", "Neha Kapoor"] }
];

// Add circles and labels to the map
cityData.forEach(function(city) {
    // Generate the alumni list in HTML format
    var alumniList = city.alumni.map(function(alumnus) {
        return "<li>" + alumnus + "</li>";
    }).join("");

    // Popup to display only alumni names
    var popupContent = `<b>Alumni:</b><ul>${alumniList}</ul>`;

    // Circle marker with alumni count as label
    var circle = L.circle([city.lat, city.lng], {
        color: 'blue',
        fillColor: '#3388ff',
        fillOpacity: 0.5,
        radius: 50000
    }).addTo(map).bindPopup(popupContent);

    // Add alumni count label
    var label = L.divIcon({
        className: 'circle-label',
        html: city.count,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    L.marker([city.lat, city.lng], { icon: label, interactive: false }).addTo(map);
});
  async function renderPage() {
    try {
        const response = await fetch('./connect.json');
        console.log(response.url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

renderPage();