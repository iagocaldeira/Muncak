export default () => (
    <div className="subscribe">
        <h2 className="subscribe--title">
            Receive the latest updates on how to protect trails.
            <br />
            Subscribe to the monthly edition of Paperless Trails.
        </h2>
        <div className="subscribe--form">
            <label htmlFor="subscribe--form--name">Name:</label>
            <input
                className="subscribe--form--input"
                id="subscribe--form--name"
                placeholder="Name"
            />
            <label htmlFor="subscribe--form--email">Email:</label>
            <input
                className="subscribe--form--input"
                id="subscribe--form--email"
                placeholder="Email"
            />
            <a
                className="subscribe--form--submit"
                href="#"
            >
                Subscribe
            </a>
        </div>
        <div id="subscribe--bubbles--right"></div>
    </div>

);
