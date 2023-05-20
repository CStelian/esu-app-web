import { useEffect } from 'react'
import './app.css'

function App() {

  useEffect(() => {
    document.addEventListener('scroll', () => {
      document.querySelectorAll('button')?.classList.remove('active');
  })},[]);
  
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let header = document.querySelector('header');
      if (window.scrollY > 500) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }}
    );},[]);

    const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <div className="logo">
          <img src="https://cdn.esufranchise.com/website/logo.svg" alt="ESU Logo" />
        </div>
        <div className="navbar">
          <button
            id="home-button"
            onClick={
              () => {
                document.getElementById('home')?.scrollIntoView({behavior: 'smooth'});
              }
            }
          >
            Home
          </button>
          <button
            id="about-button"
            onClick={
              () => {
                document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
              }
            }
          >
            About
          </button>
          <button
            id="download-button"
            onClick={
              () => {
                document.getElementById('download')?.scrollIntoView({behavior: 'smooth'});
              }
            }
          >
            Download
          </button>
        </div>
      </header>
      <main id="home" class="page">
        <div className="hero">
          <div className="hero-content">
            <h1>
              The official ESU Mobile app is here.
            </h1>
            <img className="screenshot" src="/assets/app-screenshots/home.png" alt="Screenshot of the ESU Mobile app home screen" />
            <img className="screenshot books-screen" src="/assets/app-screenshots/books.png" alt="Screenshot of the ESU Mobile app books screen" />
          </div>
        </div>
      </main>
      <section id="about" class="page">
        <h2>
          About the app
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              The official ESU Mobile app is the best way to stay up to date with the ESU Universe. With the app, you can learn more about the books, the characters, and the timeline of the universe.
            </p>
            <p>
              The app is available on Android, and is completely free to download and use.
            </p>
          </div>
        </div>
        <h3>
          Features
        </h3>
        <div className="features">
          <div className="feature">
            <ion-icon name="book"></ion-icon>
            <h4>
              Learn more about our books
            </h4>
            <p>
              With our app, you can learn about every book set in the Universe!
            </p>
          </div>
          <div className="feature">
            <ion-icon name="people"></ion-icon>
            <h4>
              Meet the characters
            </h4>
            <p>
              With an ever-growing collection of characters, we know it's hard to keep track of every single one of them! So we make it easy for you to track our characters through our app, on the go!
            </p>
          </div>
          <div className="feature">
            <ion-icon name="time"></ion-icon>
            <h4>
              Track the universe's timeline
            </h4>
            <p>
              As the universe expands with new stories, it gets hard to track when happens what. We get it, this is why the app has an official timeline tracker.
            </p>
          </div>
        </div>
      </section>
      <section id="download" class="download">
            <h2>
              Download the app
            </h2>
            <div className="download-buttons">
              <div className="google">
                <a href='https://play.google.com/store/apps/details?id=com.lnpgroup.esufranchise&utm_source=ESUAppWebsite&utm_campaign=ESUAppPromo&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                  <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                </a>
              </div>
              <div className="apple">
                <h3>Coming Soon</h3>
              </div>
            </div>
      </section>
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://cdn.esufranchise.com/website/logo.svg" alt="ESU Logo" />
          </div>
          <div className="footer-links">
            <a href="https://esufranchise.com">ESU Franchise</a>
            <a href="https://esufranchise.com/privacy">Privacy Policy</a>
            <a href="https://lnp-group.com">LNP Group</a>
            <a href="https://books.lnp-group.com">LNP Books</a>
          </div>
          <div className="copyrights">
            <p>
              &copy; {currentYear} LNP Books. All rights reserved.
            </p>
            <p>
              Google Play and the Google Play logo are trademarks of Google LLC.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
