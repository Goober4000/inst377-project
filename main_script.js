function get_weapon_skins() {
    fetch("https://valorant-api.com/v1/weapons/skins")
    .then((data) => data.json())
    .then((data) => {
        console.log(data);
    })
}

window.onload = get_weapon_skins();