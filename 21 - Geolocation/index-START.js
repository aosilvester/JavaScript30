const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed')

navigator.geolocation.watchPosition((data) => {
    console.log(data)
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`

}, (err) => {
    console.log('error')
    alert('this shit doesnt work unless you allow it')
});

