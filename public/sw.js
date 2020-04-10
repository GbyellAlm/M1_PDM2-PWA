// 1.1
self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    const title = 'Filme "Era uma vez no méxico" no Corujão desta noite!';
    const options = {
        body: 'Baita filmão, fosse vc não perdia! Venha conferir a sinopse e em seguida ja vai preparando sua pipoquinha p/ curtir! Vlww',
        icon: 'images/icon-128x128.png',
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
    console.log('[Service Worker] Notification click Received.');

    event.notification.close();

    event.waitUntil(
        clients.openWindow('http://127.0.0.1:8000/globo/segunda-feira')
    );
});