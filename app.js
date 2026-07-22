const allVideos = document.getElementsByClassName('video')

function postVideoCommand(iframe, command) {
    iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: '' }),
        '*'
    )
}

for (const video of allVideos) {
    video.addEventListener('mouseover', () => {
        postVideoCommand(video, 'playVideo')
    })
    video.addEventListener('mouseout', () => {
        postVideoCommand(video, 'pauseVideo')
    })
}


const childButton = document.querySelector('.child-button')
if (childButton) {
    childButton.addEventListener('click', (e) => {
        e.stopPropagation()
        alert('Hello World')
    })
}