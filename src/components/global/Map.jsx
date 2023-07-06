import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const Map = () => {
    const position = [-15.357609, 29.1653092]
    return (
        <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Lusaka Province
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map