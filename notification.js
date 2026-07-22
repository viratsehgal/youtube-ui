function playNotificationSound() {
    const audioContext = new AudioContext()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime)
    oscillator.frequency.setValueAtTime(1174.66, audioContext.currentTime + 0.1)

    gain.gain.setValueAtTime(0.2, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4)

    oscillator.connect(gain)
    gain.connect(audioContext.destination)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.4)
}

const notificationButton = document.getElementById('notification-button')
if (notificationButton) {
    notificationButton.addEventListener('click', playNotificationSound)
}
