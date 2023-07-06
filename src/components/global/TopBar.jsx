import Avatar from './../../assets/avatar/avatar1.jpeg'
const TopBar = () => {

    return (
        <header>
            <div className="logo">
                <h1>Zi<span>Guid</span></h1>
            </div>
            <nav>
                <div className="nav">
                    <a href="#">Home</a>
                    <a href="#">Province</a>
                    <a href="#">Culture</a>
                    <a href="#">Tourist Attractions</a>
                </div>
                <div className="user">
                    <div className="img">
                        <img src={Avatar} alt="Avatar" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default TopBar