const Card = () => {
    return (
        <div class="card">
            <div class="card-head">
                <div class="img">
                    <img src="data:image/jpeg;base64,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" alt="Northern Province" />
                </div>
                <h3>North Province</h3>
                <div class="zoom-img">
                    <img src="data:image/jpeg;base64,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" alt="Northern Province" />
                </div>
            </div>
            <div class="card-body">
                <div class="left">
                    <ul>
                        <li class="main-info-card">
                            <div class="info">
                                <h4>Features</h4>
                                <ul>
                                    <li class="list-item"> 
                                        <span></span>
                                        <h6>
                                            <span>Mosi Otunya</span>
                                            <span class="stats">
                                                <b>visits</b> 9.6 / 10
                                            </span>
                                        </h6>
                                    </li>
                                    <li class="list-item"> 
                                        <span></span>
                                        <h6>
                                            <span>Mosi Otunya</span>
                                            <span class="stats">
                                                <b>visits</b> 9.6 / 10
                                            </span>
                                        </h6>
                                    </li>
                                    
                                    <li class="list-item"> 
                                        <span></span>
                                        <h6>
                                            <span>Uranium</span>
                                            <span class="stats">
                                                <b>Qty</b> 3.6 / 10
                                            </span>
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-footer">
                <a href="#">
                    <span class="material-symbols-outlined">
                        thumb_up
                    </span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        heart_plus
                    </span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        add_circle
                    </span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        share
                    </span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        pin_drop
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Card