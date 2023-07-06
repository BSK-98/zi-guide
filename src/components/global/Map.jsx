import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const Map = () => {
    const position = [-15.357609,29.1653092]
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <TileLayer
                attribution='&copy; <a href="https://www.zi-guide">Zi Guide</a>'
                
            /> */}
            <Marker position={position}>
                <Popup>
                    Province Name
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map