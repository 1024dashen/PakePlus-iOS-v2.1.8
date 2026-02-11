// media devices
let inputValue
let resultElement

// listen document loaded
window.addEventListener('DOMContentLoaded', () => {
    inputValue = document.querySelector('#inputValue').value
    resultElement = document.querySelector('#result')
    // open url
    document.querySelector('#openUrl')?.addEventListener('click', async (e) => {
        e.preventDefault()
        console.log('open url')
        window.open(inputValue ? inputValue : 'https://juejin.cn/', '_blank')
    })
    // downloadImg
    document
        .querySelector('#downloadImg')
        ?.addEventListener('click', async (e) => {
            e.preventDefault()
            console.log('download file')
            const aDom = document.createElement('a')
            aDom.href = inputValue
                ? inputValue
                : 'https://hk.gh-proxy.org/https://github.com/Sjj1024/PakePlus/blob/main/app-icon.png'
            aDom.download = 'app-icon.png'
            aDom.click()
        })
    // downloadAudio
    document
        .querySelector('#downloadAudio')
        ?.addEventListener('click', async (e) => {
            e.preventDefault()
            console.log('download audio')
            const aDom = document.createElement('a')
            aDom.href = inputValue
                ? inputValue
                : 'https://self.pakeplus.com/likeme.mp3'
            aDom.download = 'likeme.mp3'
            aDom.click()
        })
    // downloadVideo
    document
        .querySelector('#downloadVideo')
        ?.addEventListener('click', async (e) => {
            e.preventDefault()
            console.log('download video')
            const aDom = document.createElement('a')
            aDom.href = inputValue
                ? inputValue
                : 'https://gh-proxy.org/https://github.com/worker500/FileHub/blob/main/root/IronMan.mp4'
            aDom.download = 'IronMan.mp4'
            aDom.click()
        })
    // downloadFile
    document
        .querySelector('#downloadFile')
        ?.addEventListener('click', async (e) => {
            e.preventDefault()
            console.log('download file')
            const aDom = document.createElement('a')
            aDom.href = inputValue
                ? inputValue
                : 'https://files.pakeplus.com/dist.zip'
            aDom.download = 'dist.zip'
            aDom.click()
        })
    // audioCapture
    document
        .querySelector('#audioCapture')
        ?.addEventListener('click', async (e) => {
            e.preventDefault()
            console.log('audio capture')
            const audio = document.querySelector('audio')
            audio.play()
        })
    // videoCapture
    document
        .querySelector('#videoTest')
        ?.addEventListener('click', async (e) => {
            e.preventDefault()
            console.log('video test')
            // 请求摄像头访问权限
            navigator.mediaDevices
                .getUserMedia({
                    video: true,
                    audio: true,
                })
                .then((stream) => {
                    // 成功获取视频流
                    const videoElement = document.querySelector('#videoCapture')
                    videoElement.srcObject = stream
                    videoElement.play()
                })
                .catch((error) => {
                    console.error('访问摄像头失败:', error)
                })
        })
    // screenCapture
    document
        .querySelector('#screenCapture')
        ?.addEventListener('click', async (e) => {
            e.preventDefault()
            console.log('screen capture')
            const screen = document.querySelector('screen')
            screen.capture()
        })
})
