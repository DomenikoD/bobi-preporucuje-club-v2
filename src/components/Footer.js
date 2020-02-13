import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us <a href="https://instagram.com/bobyrecomm/">@BobyRecomm</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          Stranica prijatelja:{' '}
          <a href="https://architecture-music.com/">
            Arhitektura Musić - u izradi
          </a>
          .
        </span>
        <span>
          {'  '}© Copyright {new Date().getFullYear()} All rights reserved.
          Crafted by <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
