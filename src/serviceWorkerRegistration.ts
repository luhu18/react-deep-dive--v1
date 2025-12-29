export function register () {
    if ('ServiceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('sw regiistered: ', registration)
            }).catch(registrationError => {
                console.log('Sw registration failed: ', registrationError)
            })
        })
    }
}