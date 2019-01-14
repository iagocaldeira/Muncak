export default () => (
    <div className="features">
        <h2 className="features--title">
            We envision a world where everyone has permanent access to a hiking trail
        </h2>
        <div
            className="features--card"
            id="features--advocate"
        >
            <img
                alt="Horn loudspeaker image about advocate section"
                className="features--card--image"
                src={"../../static/images/advocate.svg"}
            />
            <h3 className="features--card--title">Advocate</h3>
            We work with Congress, Federal agencies, and partners on policy
            issues and legislation to ensure funding for trails, preservation of
            natural areas, and protection of the hiking experience.
            <div id="features--bubbles--center"></div>
        </div>
        <div
            className="features--card"
            id="features--volunteer"
        >
            <img
                alt="Hand with a heart drawn about volunteers section"
                className="features--card--image"
                src={"../../static/images/volunteer.svg"}
            />
            <h3 className="features--card--title">Volunteer</h3>
            Trails don't maintain themselves. Individuals of any age and
            experience level can become trail stewards. Give back to the trails you
            love, meet new people, and enjoy the experience!
        </div>
        <div
            className="features--card"
            id="features--explore"
        >
            <img
                alt="Mountain with a magnifying glass dran about explore section"
                className="features--card--image"
                src={"../../static/images/explore.svg"}
            />
            <h3 className="features--card--title">Explore</h3>
            Feel confident when you set out on your next trail adventure.
            Check out our free hiking resources like tips for hiking with families,
            gear checklists, finding the best trail for you.
        </div>
        <a className="features--learnMore">Learn More</a>
        <div id="features--bubbles--right"></div>
    </div>
);