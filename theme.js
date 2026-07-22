const themeButton = document.getElementById('theme-button')
const root = document.documentElement

function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'
}

function applyTheme(theme) {
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    themeButton.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false')
    themeButton.classList.toggle('is-dark', theme === 'dark')
}

applyTheme(getPreferredTheme())

themeButton.addEventListener('click', () => {
    const nextTheme =
        root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    applyTheme(nextTheme)
})
