// Define gun data
const gunData = {
    rifles: [
        {
            name: "AK-47",
            country: "Russia",
            image: "ak47.jpg", // Use the correct image URL
            description: "The AK-47 is a gas-operated, selective-fire rifle designed in the Soviet Union."
        },
        {
            name: "M16",
            country: "USA",
            image: "m16.jpg", // Use the correct image URL
            description: "The M16 is a military adaptation of the AR-15, a lightweight, gas-operated rifle."
        }
    ],
    handguns: [
        {
            name: "Glock 17",
            country: "Austria",
            image: "glock17.jpg", // Use the correct image URL
            description: "The Glock 17 is a semi-automatic pistol designed by Gaston Glock."
        },
        {
            name: "Colt 1911",
            country: "USA",
            image: "colt1911.jpg", // Use the correct image URL
            description: "The Colt 1911 is a single-action, semi-automatic pistol designed by John Browning."
        }
    ],
    shotguns: [
        {
            name: "Remington 870",
            country: "USA",
            image: "remington870.jpg", // Use the correct image URL
            description: "The Remington 870 is a pump-action shotgun known for its reliability and power."
        },
        {
            name: "Benelli M4",
            country: "Italy",
            image: "benellim4.jpg", // Use the correct image URL
            description: "The Benelli M4 is a semi-automatic shotgun, renowned for its tactical performance."
        }
    ]
};

// Function to load guns based on selected type
function loadGuns(type) {
    const gunsSection = document.getElementById('guns-detail');
    gunsSection.innerHTML = ""; // Clear previous content
    
    const guns = gunData[type];
    if (guns) {
        guns.forEach(gun => {
            const gunDiv = document.createElement('div');
            gunDiv.classList.add('gun');
            
            gunDiv.innerHTML = `
                <img src="${gun.image}" alt="${gun.name}">
                <h3>${gun.name}</h3>
                <p><strong>Country:</strong> ${gun.country}</p>
                <p>${gun.description}</p>
            `;
            
            gunsSection.appendChild(gunDiv);
        });
    }
}
