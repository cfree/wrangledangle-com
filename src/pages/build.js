import React from "react"
import { Helmet } from "react-helmet"

const build = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Build - Wrangle Dangle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <header className="build-header">
        <img src="/assets/img/wrangledangle.jpg" alt="Montego Jeep" />
        {/* <ul className="build-list">
        <li>Favorite</li>
        <li>Share</li>
      </ul> */}
      </header>
      <div className="build-heading">
        <h1>Montego</h1>
        <p>
          A 2020 Jeep Wrangler JLU Rubicon 4x4 build by{" "}
          <a href="https://instagram.com/wrangle_dangle">@wrangle_dangle</a>
        </p>
      </div>
      <div className="container">
        {/* <Gallery> */}

        <section>
          <h2>Engine</h2>
          <ul className="build-list">
            <li>
              Superchips Flashcal F5 3571-JL programmer
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
        </section>

        {/* <section>
        <h2>Drivetrain</h2>
        <ul className="build-list">
          <li>
            Superchips Flashcal
            <a className="button" href="" target="_blank">
              See It
            </a>
          </li>
        </ul>
      </section> */}

        <section>
          <h2>Wheels & Tires</h2>
          <ul className="build-list">
            <li>
              315/70R17 Goodyear Wrangler Duratracs
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
        </section>

        <section>
          <h2>Suspension</h2>
          <ul className="build-list">
            <li>
              2" Mopar w/ Fox Series shocks
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
        </section>

        <section>
          <h2>Exterior</h2>
          <ul className="build-list">
            <li>
              ARB diff covers
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Rock Hard 4x4 rear lower control arm rock sliders
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              RokBlokz quick release mud flaps
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Bestop Supertop Ultra twill soft top
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Mopar tailgate reinforcement
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Alien Sunshade front/rear mesh shade
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Teraflex Alpha HD adjustable tire mounting kit
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Rock Hard 4x4 Patriot Series Rocker Guards tube rock sliders
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Warn EVO 10-S winch, winch plate
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Maximus 3 filler trim plates, front license plate frame, red winch
              hook anchor
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Rugged Ridge Reflex stubby 13-inch antenna
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
        </section>

        <section>
          <h2>Interior</h2>
          <ul className="build-list">
            <li>
              Mopar front grab handles
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Rugged Ridge door sill covers
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
        </section>

        <section>
          <h2>Equipment</h2>
          <ul className="build-list">
            <li>
              Smittybilt Compact Air System 2747 CO2 tank
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Staun automatic tire deflators
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Vondior tire pressure gauge
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              8-foot tree saver
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Smittybilt snatch block
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
        </section>

        <section>
          <h2>Accessories</h2>
          <ul className="build-list">
            <li>
              iPhone X camera
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Garmin Oregon 450 GPS
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              GoPro Hero 3
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Midland GXT1000VP4 GMRS/FRS radio
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Baofeng BF-F8HP 8W handheld HAM radio
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default build
