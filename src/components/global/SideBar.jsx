const SideBar = () => {
    return (
        <menu>
            <nav>
                <a href="#" class="active">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                    </div>
                    <div class="details">
                        Profile
                    </div>
                </a>
                <a href="#">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <div class="details">
                        Favorites
                    </div>
                </a>
                <a href="#">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            playlist_add_circle
                        </span>
                    </div>
                    <div class="details">
                        Wishlist
                    </div>
                </a>
                <a href="#">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            manage_accounts
                        </span>
                    </div>
                    <div class="details">
                        Settings
                    </div>
                </a>
                <a href="#">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            manage_history
                        </span>
                    </div>
                    <div class="details">
                        History Settings
                    </div>
                </a>
                <a href="#">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            share
                        </span>
                    </div>
                    <div class="details">
                        Share Your Experience
                    </div>
                </a>
                <a href="#" class="add">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            add
                        </span>
                    </div>
                    <div class="details">
                        Add
                    </div>
                </a>
            </nav>
        </menu>
    )
}

export default SideBar