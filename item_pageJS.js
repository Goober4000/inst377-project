document.addEventListener('DOMContentLoaded', function () {
    fetch('https://valorant-api.com/v1/weapons/skins')
        .then(response => response.json())
        .then(data => {
            const skins = data.data.map(skin => [skin.displayName, skin.displayIcon]);

            new gridjs.Grid({
                pagination: {
                    limit: 5
                },
                search: {
                    enabled: true
                },
                columns: [
                    "Skin Name",
                    {
                        name: "Skin Image",
                        width: "50%",
                        formatter: (cell) => gridjs.html(`<img src="${cell}" alt="Skin Image" style="max-width: 300px; max-height: 300px;">`)
                    }
                ],
                data: skins,
                style: {
                    table: {
                        width: '100%'
                    },
                    th: {
                        border: '2px solid #ef0f52',
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: '#f4f4f4'
                    },
                    td: {
                        border: '2px solid #ef0f52',
                        padding: '20px',
                        textAlign: 'Left',
                        backgroundColor: '#c1c1c1'
                    },
                    pagination: {
                        marginTop: '10px',
                        textAlign: 'right'
                    },
                    search: {
                        marginBottom: '10px',
                        textAlign: 'right'
                    }
                }
            }).render(document.getElementById("weapon_container"));
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://valorant-api.com/v1/buddies')
        .then(response => response.json())
        .then(data => {
            const buddies = data.data.map(buddies => [buddies.displayName, buddies.displayIcon]);

            new gridjs.Grid({
                pagination: {
                    limit: 5
                },
                search: {
                    enabled: true
                },
                columns: [
                    "Buddy Name",
                    {
                        name: "Buddy Image",
                        width: "50%",
                        formatter: (cell) => gridjs.html(`<img src="${cell}" alt="Skin Image" style="max-width: 300px; max-height: 300px;">`)
                    }
                ],
                data: buddies,
                style: {
                    table: {
                        width: '100%'
                    },
                    th: {
                        border: '2px solid #ef0f52',
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: '#f4f4f4'
                    },
                    td: {
                        border: '2px solid #ef0f52',
                        padding: '20px',
                        textAlign: 'Left',
                        backgroundColor: '#c1c1c1'
                    },
                    pagination: {
                        marginTop: '10px',
                        textAlign: 'right'
                    },
                    search: {
                        marginBottom: '10px',
                        textAlign: 'right'
                    }
                }
            }).render(document.getElementById("buddie_container"));
        })
        .catch(error => console.error('Error fetching data:', error));
});