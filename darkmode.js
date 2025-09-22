let darkmode =localStorage.getItem('darkmode')
const themeSwiitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode =() => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if( darkmode === "active") enableDarkmode()

themeSwiitch.addEventListener("clicl",() => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})