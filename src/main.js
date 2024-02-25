const toggleButton = document.getElementById('toggleButton');
const toggleMenu = document.getElementById('toggleMenu');

toggleButton.addEventListener('click', () =>{
    toggleMenu.classList.toggle('hidden');
});

Notification.requestPermission().then(perm => {
    if(perm === "granted") {
        new Notification("Cikalongfood", {
            body: "Aplikasi sedang tahap pengembangan.",
            icon: "../public/logo.jpeg",
        })
    }
});