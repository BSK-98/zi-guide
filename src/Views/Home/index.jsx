import { Card, Map } from "../../components"

const Home = () => {
    return (
        <div class="home page">
            <div class="map-box">
                <div id="map">
                    <Map />
                </div>
            </div>
            <div class="content-box">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home