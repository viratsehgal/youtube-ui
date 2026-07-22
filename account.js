const accountToggle = document.getElementById('account-toggle')
const accountPanel = document.getElementById('account-panel')
const accountForm = document.getElementById('account-form')
const accountName = document.getElementById('account-name')
const accountEmail = document.getElementById('account-email')
const accountInitial = document.getElementById('account-initial')
const accountDisplayName = document.getElementById('account-display-name')
const accountDisplayEmail = document.getElementById('account-display-email')
const accountStatus = document.getElementById('account-status')

function getSavedAccount() {
    try {
        return JSON.parse(localStorage.getItem('account') || '{}')
    } catch {
        return {}
    }
}

function updateAccountUI(account) {
    const name = account.name || ''
    const email = account.email || ''

    accountName.value = name
    accountEmail.value = email
    accountDisplayName.textContent = name || 'Guest'
    accountDisplayEmail.textContent = email || 'No email saved'
    accountInitial.textContent = (name.trim().charAt(0) || 'G').toUpperCase()
}

function setPanelOpen(isOpen) {
    accountPanel.hidden = !isOpen
    accountToggle.setAttribute('aria-expanded', String(isOpen))
}

const savedAccount = getSavedAccount()
updateAccountUI(savedAccount)

accountToggle.addEventListener('click', (event) => {
    event.stopPropagation()
    setPanelOpen(accountPanel.hidden)
})

accountPanel.addEventListener('click', (event) => {
    event.stopPropagation()
})

document.addEventListener('click', () => {
    setPanelOpen(false)
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setPanelOpen(false)
    }
})

accountForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const account = {
        name: accountName.value.trim(),
        email: accountEmail.value.trim(),
    }

    localStorage.setItem('account', JSON.stringify(account))
    updateAccountUI(account)

    accountStatus.hidden = false
    window.setTimeout(() => {
        accountStatus.hidden = true
    }, 1800)
})


