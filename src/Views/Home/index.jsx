import { Card, Map } from "../../components"

const Home = () => {
    return (
        <div className="home page">
            <div className="map-box">
                <div id="map">
                    <Map />
                </div>
            </div>
            <div className="content-box">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home