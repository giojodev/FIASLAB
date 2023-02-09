var map = L.map('map').setView([12.1543889, -86.2301025], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([12.1543889, -86.2301025]).addTo(map)
    .bindPopup('Laboratorio Metalurgico <br> FIASLAB')
    .openPopup();