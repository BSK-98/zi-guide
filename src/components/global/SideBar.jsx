const SideBar = () => {
    return (
        <menu>
            <nav>
                <a href="#" className="active">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            account_circle
                        </span>
                    </div>
                    <div className="details">
                        Profile
                    </div>
                </a>
                <a href="#">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <div className="details">
                        Favorites
                    </div>
                </a>
                <a href="#">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            playlist_add_circle
                        </span>
                    </div>
                    <div className="details">
                        Wishlist
                    </div>
                </a>
                <a href="#">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            manage_accounts
                        </span>
                    </div>
                    <div className="details">
                        Settings
                    </div>
                </a>
                <a href="#">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            manage_history
                        </span>
                    </div>
                    <div className="details">
                        History Settings
                    </div>
                </a>
                <a href="#">
                    <div className="icon">
                        <span className="material-symbols-outlined">
                            share
                        </span>
                    </div>
                    <div className="details">
                        Share Your Experience
                    </div>
                </a>
                <div className="add-c">
                    <a href="#" className="add">
                        <div className="icon">
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </div>
                        <div className="details">
                            Add
                        </div>
                    </a>
                </div>
            </nav>
        </menu>
    )
}

export default SideBar