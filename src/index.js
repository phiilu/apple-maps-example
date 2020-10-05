mapkit.init({
    authorizationCallback: function (done) {
        fetch("/api/token")
            .then((res) => res.text())
            .then(done);
    },
    language: navigator.language || navigator.userLanguage,
})

const center = new mapkit.Coordinate(48.210033, 16.363449) // Vienna
const map = new mapkit.Map("apple-maps", {
    center,
    cameraDistance: 15000,
})