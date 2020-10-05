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

const search = new mapkit.Search({
    language: navigator.language || navigator.userLanguage,
    getsUserLocation: true,
    region: map.region,
});

const searchFormElement = document.getElementById("search-form");
const searchBoxElement = document.getElementById("search-box");

searchFormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchBoxElement.value;
    if (query) {
        search.search(query, (error, data) => {
            console.log(data);
            if (error) {
                console.log("Error", error);
                return;
            }
            map.setRegionAnimated(data.boundingRegion);
        });
    }
});