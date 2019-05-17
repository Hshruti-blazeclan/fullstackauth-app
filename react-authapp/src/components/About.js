import React, { Component } from 'react';
import "../static/css/style.css"
import CommonFooter from './CommonFooter';
import CommonHeader from './CommonHeader';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CommonHeader
                    pathname={this.props.location.pathname}
                />
                {/* <section className="main-jumbotron js-handle-banner js-id-29628" style={{}}>
                    <div className="jumbo-container">
                        <div className="row ">
                            <div className="col-md  content-wrapper">
                                <h1 className="jumbotron-title display-1">
                                    <p>The Moz Story</p>
                                </h1>
                                <h4 className="jumbotron-subtitle">
                                    <p>We know SEO. In fact, we wrote the blog on it.</p>
                                </h4>
                            </div>
                        </div>
                        <div className="overlay" /></div>
                    <div className="jumbotron-overlay" />
                </section>
                <main id="content" role="main">
                    <div className="page-section-wrapper ">
                        <div className="page-section-anchor" id="at-moz-we-believe-there-is-a-better-way-to-do-marketing.-a-more-valuable-less-invasive-way-where-customers-are-earned-rather-than-bought.-were-obsessively-passionate-about-it-and-our-mission-is-to-help-people-achieve-it.-we-focus-on-search-engine-optimization-seo.-its-one-of-the-least-understood-and-least-transparent-aspects-of-great-marketing-and-we-see-that-as-an-opportunity-were-excited-to-simplify-seo-for-everyone-through-our-software-education-and-community." />
                        <div className="page-section page-section-at-moz-we-believe-there-is-a-better-way-to-do-marketing.-a-more-valuable-less-invasive-way-where-customers-are-earned-rather-than-bought.-were-obsessively-passionate-about-it-and-our-mission-is-to-help-people-achieve-it.-we-focus-on-search-engine-optimization-seo.-its-one-of-the-least-understood-and-least-transparent-aspects-of-great-marketing-and-we-see-that-as-an-opportunity-were-excited-to-simplify-seo-for-everyone-through-our-software-education-and-community. page-section-small page-section-with-arrow page-section-narrow js-handle-pageSection js-id-29675 background-ultra-light-gray" style={{}}>
                            <div className="container">
                                <div id="at-moz-we-believe-there-is-a-better-way-to-do-marketing.-a-more-valuable-less-invasive-way-where-customers-are-earned-rather-than-bought.-were-obsessively-passionate-about-it-and-our-mission-is-to-help-people-achieve-it.-we-focus-on-search-engine-optimization-seo.-its-one-of-the-least-understood-and-least-transparent-aspects-of-great-marketing-and-we-see-that-as-an-opportunity-were-excited-to-simplify-seo-for-everyone-through-our-software-education-and-community." className="page-section-anchor" />
                                <div className="page-section-headline">
                                <h2 className="page-section-title">
                                <p>At Moz, we believe there is a better way to do marketing. A more valuable, less invasive way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization (SEO). It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity: We're excited to simplify SEO for everyone through our software, education, and community.</p>
                                </h2>
                                </div>
                                
                            </div></div></div><div className="page-section-wrapper "><div className="page-section page-section-with-arrow js-handle-pageSection js-id-29693 background-ultra-light-gray darker" style={{}}><div className="container"><div className="row"><div className="col-12 col-lg-5  align-self-center"><img src="https://moz.imgix.net/about/young-rand.jpg?auto=format&ch=Width&fit=max&q=50&w=1200&s=f0fc387750568df33d039d53ca516567" alt className="d-none d-md-block" /></div><div className="col-12 col-lg-6 offset-lg-1 text-left"><div id="our-founding" className="page-section-anchor" /><div className="page-section-headline"><h2 className="page-section-title"><p>Our founding</p></h2></div><div className="page-section-body"><p>Moz was founded by Rand Fishkin and Gillian Muessig in 2004. It was called SEOmoz, and started as a blog and an online community where some of the world's first SEO experts shared their research and ideas. We launched the Beginner's Guide to SEO and our first Search Ranking Factors study, and that hub of industry expertise transformed into a small consulting firm and led us to create some of our first SEO tools.</p></div></div></div></div></div></div><div className="page-section-wrapper "><div className="page-section page-section-with-arrow js-handle-pageSection js-id-29703 background-ultra-light-gray" style={{}}><div className="container"><div className="row row-reverse"><div className="col-12 col-lg-5 offset-md-1 align-self-center"><img src="https://moz.imgix.net/about/happy-mozzers.jpg?auto=format&ch=Width&fit=max&q=50&w=1200&s=b0966639561ed2713c9d5b795a534621" alt className="d-none d-md-block" /></div><div className="col-12 col-lg-6 text-left"><div id="early-growth-amp-funding" className="page-section-anchor" /><div className="page-section-headline"><h2 className="page-section-title"><p>Early growth &amp; funding</p></h2></div><div className="page-section-body"><p>After a glimpse of the demand, we shifted our focus from consulting to our software, taking our first round of funding in 2007 to power the development of new tools and ideas. By 2009, we tallied our first 5,000 subscribers and codified our core values in the acronym TAGFEE, continuing to lead the industry with our educational content in an effort to demystify SEO (this is also when we started filming <a href="https://moz.com/blog/category/whiteboard-friday">Whiteboard Fridays</a>!).</p></div></div></div></div></div></div><div className="page-section-wrapper "><div className="page-section page-section-with-arrow js-handle-pageSection js-id-29705 background-ultra-light-gray darker" style={{}}><div className="container"><div className="row"><div className="col-12 col-lg-5  align-self-center"><img src="https://moz.imgix.net/about/gold-roger-1.jpg?auto=format&ch=Width&fit=max&q=50&w=1200&s=df52914761d4efdbdf8569f18072298a" alt className="d-none d-md-block" /></div><div className="col-12 col-lg-6 offset-lg-1 text-left"><div id="series-b-funding" className="page-section-anchor" /><div className="page-section-headline"><h2 className="page-section-title"><p>Series B funding</p></h2></div><div className="page-section-body"><p>A series B investment from The Foundry Group propelled our efforts into the broader realm of inbound marketing, a concept that rejects pushy sales in favor of attracting customers with real value. We acquired a Twitter analytics tool called Followerwonk as well as GetListed, a local SEO tool that has evolved into today's Moz Local.</p></div></div></div></div></div></div><div className="page-section-wrapper "><div className="page-section page-section-with-arrow js-handle-pageSection js-id-29707 background-ultra-light-gray" style={{}}><div className="container"><div className="row row-reverse"><div className="col-12 col-lg-5 offset-md-1 align-self-center"><img src="https://moz.imgix.net/about/10-years-of-moz-1.jpg?auto=format&ch=Width&fit=max&q=50&w=1200&s=03d37bec5c2e0aed9acfc7da02ed4274" alt className="d-none d-md-block" /></div><div className="col-12 col-lg-6 text-left"><div id="a-new-leaf" className="page-section-anchor" /><div className="page-section-headline"><h2 className="page-section-title"><p>A new leaf</p></h2></div><div className="page-section-body"><p>With our broader marketing efforts in full swing, we rebranded from SEOmoz to Moz in 2013. We released a suite of campaign-based tools called Moz Analytics that included features for content, social media, and brand management in addition to links and rankings. We also celebrated 10 years in search and welcomed long-time Mozzer Sarah Bird as our new CEO.</p></div></div></div></div></div></div><div className="page-section-wrapper "><div className="page-section js-handle-pageSection js-id-29709 background-ultra-light-gray darker" style={{}}><div className="container"><div className="row"><div className="col-12 col-lg-5  align-self-center"><img src="https://moz.imgix.net/about/james-mozplex.jpg?auto=format&ch=Width&fit=max&q=50&w=1200&s=c792b847aac73f3f7d25e82d5352a9df" alt className="d-none d-md-block" /></div><div className="col-12 col-lg-6 offset-lg-1 text-left"><div id="to-infinity-and-beyond" className="page-section-anchor" /><div className="page-section-headline"><h2 className="page-section-title"><p>To Infinity and Beyond!</p></h2></div><div className="page-section-body"><p>With SEO more important than ever, in 2016 we made a difficult but necessary decision to reverse our expansion into inbound marketing, <a href="https://moz.com/blog/moz-is-doubling-down-on-search">shifting our strategy</a> back to what we know best: search. We're making dramatic improvements to our core products, Moz Pro and Moz Local, and continue to push for transparency and a clear understanding of an otherwise complex field. Did we mention we're <a href="https://moz.com/about/jobs">also hiring?</a></p></div></div></div></div></div></div><div className="page-section-wrapper "><div className="page-section-anchor" id="where-does-the-name-moz-come-from" /><div className="page-section page-section-where-does-the-name-moz-come-from js-handle-pageSection js-id-29736 background-ultra-light-gray" style={{}}><div className="container"><div id="where-does-the-name-moz-come-from" className="page-section-anchor" /><div className="page-section-headline"><h2 className="page-section-title"><p>Where Does the Name "Moz" Come From?</p></h2></div><div className="testimonial testimonial-large "><div className="testimonial-large-content"><div className="container testimonial-large-container"><div className="row"><div className="col-md-9 mx-auto"><div className="testimonial-large-panel"><h4 className="alt testimonial-quote">
                                    Moz, formerly SEOmoz, has a name that was inspired by organizations like DMOZ, Mozilla, and Chefmoz — all companies that strove for engaging their communities with openness and integrity. From the very beginning, we felt passionately about bringing that same integrity to the frustratingly opaque SEO industry.
                            </h4></div></div><div className="col-12"><div className="testimonial-info"><div className="testimonial-avatar "><img alt src="https://moz.imgix.net/about/avatars/rand-headshot-300x300.jpg?auto=format&ch=Width&facepad=10&fit=facearea&h=80&q=50&w=80&s=f0d3a0c07039d3ce3e695541a6e7f76f" width={80} height={80} /></div><p className="testimonial-info"><strong>Rand Fishkin</strong><br />
                                        Founder at <a href="https://moz.com/">Moz</a></p></div></div></div></div></div></div></div></div></div><div className="page-section-wrapper "><div className="page-section-anchor" id="interested-in-our-latest-chapter" /><div className="page-section page-section-interested-in-our-latest-chapter js-handle-pageSection js-id-29738 background-ultra-light-gray darker" style={{}}><div className="container"><div id="interested-in-our-latest-chapter" className="page-section-anchor" /><div className="page-section-headline"><h2 className="page-section-title"><p>Interested in our latest chapter?</p></h2><p className="page-section-subtitle"><a href="/products/"><strong>Learn about Moz's products &gt;&gt;</strong></a></p></div></div></div></div></main> */}
            {/* </div> */}
            
            
        {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide" />
              <div className="container">
                <div className="carousel-caption d-none d-md-block text-left">
                  <h1>Example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide" />
              <div className="container">
                <div className="carousel-caption d-none d-md-block">
                  <h1>Another example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide" />
              <div className="container">
                <div className="carousel-caption d-none d-md-block text-right">
                  <h1>One more for good measure.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div> */}
        {/* Marketing messaging and featurettes
    ================================================== */}
        {/* Wrap the rest of the page in another container to center all the content. */}
        <div className="container marketing text-center">
          {/* Three columns of text below the carousel */}
          <h3>ABOUT US</h3>
            <p><em>Work with heart and have great support</em></p>
            <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, 
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
            <br />
          <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width={140} height={140} />
              <h2>ONLINE COURSE FACILITIES</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width={140} height={140} />
              <h2>MODERN BOOK LIBRARY</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias..</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width={140} height={140} />
              <h2>BE INDUSTRIAL LEADER</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Lorem ipsum dolor sit amet <span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 push-md-5">
              <h2 className="featurette-heading">Lorem ipsum dolor sit amet  <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
            </div>
            <div className="col-md-5 pull-md-7">
              <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Lorem ipsum dolor sit amet <span className="text-muted">Checkmate.</span></h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>











            <CommonFooter />
            </div >
        )
    }
}
export default About;
