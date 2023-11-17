function searchListings(searchString) {
    let searchPattern = new RegExp(searchString.toLowerCase());
    return listings.filter((listing) => {
        return !listing['name'].toLowerCase().search(searchString.toLowerCase());
    })
}

function populateSearch(searchString) {
    return createListingsContainer(searchListings(searchString));
}

document.addEventListener('DOMContentLoaded', function () {
    // Execute code after the DOM is fully loaded
    console.log('DOM Loaded');

    var slider = document.getElementById("range");
    var output = document.getElementById("value");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    };

    document.getElementById("search-button").addEventListener('click', () => {
        let searchString = document.getElementById("searchInput").value;
        document.getElementById("searchResults").append(populateSearch(searchString))
    });
})

