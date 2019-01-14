export default () => (
    <footer className="footer">
        <nav className="footer--nav">
            <footer
                className="footer--nav--collumn"
                role="contentinfo"
            >
                <div className="footer--nav--collumn--title">Contact us</div>
                <div>
                    Muncak hiking society
                    <br />
                    8605 Second Ave.
                    <br />
                    Silver Spring, MD 20910
                </div>
                <div>
                    Info@muncak.org
                    <br />
                    1-301-565-6704 (Main)
                    <br />
                    1-800-972-8608 (Toll-free)
                </div>
            </footer>
            <div className="footer--nav--collumn">
                <div className="footer--nav--collumn--title">About us</div>
                <div><a href="#">Our Mission</a></div>
                <div><a href="#">Our Team</a></div>
                <div><a href="#">Corporate Sponsors</a></div>
                <div><a href="#">Financials</a></div>
                <div><a href="#">Media Center</a></div>
            </div>
            <div className="footer--nav--collumn">
                <div className="footer--nav--collumn--title">Our Programs</div>
                <div><a href="#">Hike The Hill</a></div>
                <div><a href="#">Volunteer Vacations</a></div>
                <div><a href="#">Alternative Break</a></div>
            </div>
            <div className="footer--nav--collumn">
                <div className="footer--nav--collumn--title">Support trails</div>
                <div><a href="#">Donate</a></div>
                <div><a href="#">Individual Membership</a></div>
                <div><a href="#">Gift membership</a></div>
                <div><a href="#">Hiker Store</a></div>
            </div>
            <div className="footer--nav--collumn">
                <div className="footer--nav--collumn--title">Hiking resources</div>
                <div><a href="#">Hikes Near You</a></div>
                <div><a href="#">Hiking 101</a></div>
                <div><a href="#">Muncak Blog</a></div>
                <div><a href="#">Hiking Organizations</a></div>
            </div>
        </nav>
        <div className="footer--social">
            <div>
                <a href="#">
                    <img
                        alt="Instagram logo in blue"
                        src={"../../static/images/instagram.svg"}
                        aria-label="Instagram"
                    />
                </a>
            </div>
            <div>
                <a href="#">
                    <img
                        alt="Facebook logo in blue"
                        src={"../../static/images/facebook.svg"}
                        aria-label="Facebook"
                    />
                </a>
            </div>
            <div>
                <a href="#">
                    <img
                        alt="Twitter logo in blue"
                        src={"../../static/images/twitter.svg"}
                        aria-label="Twitter"
                    />
                </a>
            </div>
        </div>
    </footer >
);
