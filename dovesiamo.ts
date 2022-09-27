// Initialize and add the map
function initMap(): void {
  // The location of Uluru
  const uluru = { lat: 41.45704, lng: 12.90647 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: uluru,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
