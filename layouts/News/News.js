export default () => (
    <div className="news">
        <h2 className="news--title">Protecting Trails: Current News and Issues </h2>
        <div className="news--card">
            <img 
                alt="Four people walking on a trail"
                className="news--card--image"
                src={require('../../static/images/news1.webp')}
                />
            <div className="news--card--title">2,802 Miles of Trail to be Improved on International Trails Day</div>
            <div className="news--card--text">
                On June 2, 2018, people across the worldwill come together to
                collectively improve 2,802 miles of trail—the distance across the
                world—during International Trails Day. Muncak invites hikers, cyclists,…
            </div>
            <div className="news--card--readMore">
            <a href="#">Read More</a>
            </div>
        </div>
        <div className="news--card">
            <img 
                alt="Two people riding a bike in the woods"
                className="news--card--image"
                src={require('../../static/images/news2.webp')}
                />
            <div className="news--card--title">Four Ways to Celebrate International Trails Day on a Bicycle</div>
            <div className="news--card--text">
                There are many ways to celebrate the International Trails Day on June 2.
                It’s even possible to participate on a bicycle. And if you go on a bike
                overnight trip during International Trails Dayyou will simultaneously…
            </div>
            <div className="news--card--readMore">
            <a href="#">Read More</a>
            </div>
        </div>
        <div className="news--card">
            <img 
                alt="Landscape with mountains"
                className="news--card--image"
                src={require('../../static/images/news3.webp')}
                />
            <div className="news--card--title"> Millennials are the Future of our Trails</div>
            <div className="news--card--text">
                The smell of fresh dew is a welcome scent, as the crunch of my boots
                melds with the sound of the birds singing their morning song. It’s early
                and I am wearing layers, but it won’t be long until they are peeled away
                to adapt to the summer…
            </div>
            <div className="news--card--readMore">
            <a href="#">Read More</a>
            </div>
            <div id="news--bubbles--right"></div>
        </div>
    </div>
);
