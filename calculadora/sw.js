const cacheV = 'calculadora-v1.0';
const archivos = [
    '/',
    'index.html',
    'index.css',
    '/js/index.js',
    '/js/app.js'
];

self.addEventListener( 'install', e =>{
    e.waitUntil( 
        caches.open( cacheV )
            .then( cache => {
                cache.addAll( archivos );
            })
    )
});

self.addEventListener( 'activate', e => {
    e.waitUntil(
        caches.keys()
            .then( keys => {
                return Promise.all(
                    keys.filter( key => key !== cacheV )
                        .map( key => caches.delete( key ) )
                )
            })
    )
});

self.addEventListener( 'fetch', e => {
    e.respondWith(
        caches.match( e.request )
            .then( respuesta => {
                return respuesta
            })
    )
});