document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get("from");
    const to = urlParams.get("to");

    const routeBox = document.getElementById("source-destination");

    if (!routeBox) {
        console.error("Required elements not found in the DOM!");
        return;
    }

    routeBox.textContent = `Route: ${from} to ${to}`;

    fetch("/cab_fares.json")
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data)) {
                console.error("Invalid data format received");
                return;
            }

            const matchedRoute = data.find(fare => 
                fare.from.toLowerCase() === from.toLowerCase() &&
                fare.to.toLowerCase() === to.toLowerCase()
            );

            if (!matchedRoute) {
                console.error("No fare data available for this route.");
                return;
            }

            Object.keys(matchedRoute.fares).forEach(service => {
                Object.keys(matchedRoute.fares[service]).forEach(subService => {
                    const elementId = `${service.toLowerCase()}-${subService.toLowerCase().replace(/\s+/g, '-')}`;
                    const priceElement = document.getElementById(elementId);
                    if (priceElement) {
                        priceElement.textContent = `₹${matchedRoute.fares[service][subService]}`;
                    }
                });
            });
        })
        .catch(error => {
            console.error("Error fetching fare data:", error);
        });
});
