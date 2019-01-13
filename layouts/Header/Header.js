export default () => (
    <div className="header">
        <div className="header--logo">
            <span className="header--logo--initial">M</span>
            uncak
        </div>
        <nav className="header--menu">
            <div className="header--menu--item">
                <a href="#">Home</a>
            </div>
            <div className="header--menu--item">
                <a href="#">Go Hiking</a>
            </div>
            <div className="header--menu--item">
                <a href="#">About</a>
            </div>
            <div className="header--menu--item">
                <a
                    className="header--menu--item--login"
                    href="#"
                >
                    Login
                </a>
            </div>
        </nav>
    </div >
)
