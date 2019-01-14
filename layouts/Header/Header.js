class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    componentDidMount() {
        const triggers = document.querySelectorAll('#header--menu--hamburger--label, #header--menu--hamburger--toggle');
        Array.from(triggers).forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault()
                document.querySelector('#header--menu--hamburger--toggle').classList.toggle('active');
                document.querySelectorAll('.header--menu--background, .header--menu--item, .header--menu').forEach(e => e.classList.toggle('open'))
            });
        });
    }

    render() {
        return (
            <div className="header">
                <div className="header--logo">
                    <span className="header--logo--initial">M</span>
                    uncak
                </div>
                <nav className="header--menu">
                    <div className="header--menu--hamburger">
                        <label
                            htmlFor="header--menu--hamburger--toggle"
                            id="header--menu--hamburger--label"
                            aria-label="mobile hamburger menu"
                        >
                            &#9776;
                        </label>
                        <input
                            type="checkbox"
                            id="header--menu--hamburger--toggle"
                        />
                    </div>
                    <img
                        alt="A boy with a girl on top of a mountain celebrating"
                        className="header--menu--background"
                        src={"../../static/images/hero_illustration.webp"}
                    />
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
    }
}


export default Header;