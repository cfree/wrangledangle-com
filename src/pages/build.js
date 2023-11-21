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
              LT315/70R17C (35-inch) BF Goodrich KO2 all-terrain tires
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
          <ul className="build-list">
            <li>
              Mopar 17" x 8" Rubicon Extreme Recon XR beadlock-capable wheels in dark gray metallic
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
        </section>

        <section>
          <h2>Suspension & Steering Components</h2>
          <ul className="build-list">
            <li>
              2" Mopar w/ Fox Series shocks
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>Fox Factory Race Series 2.0 ATS steering stabilizer</li>
            <li>Steer Smarts Yeti XD JL Griffin XD w/ attenuator - top mount, red belows</li>
            <li>Steer Smarts Yeti XD JL Rubicon tie-rod assembly</li>
            <li>Steer Smarts Yeti XD JL Pro-Series adjustable track bar, front and rear</li>
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
              Rock Hard 4x4 Patriot Series Rocker Guards tube rock sliders
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
              Bestop Trektop Slantback soft top
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
              Mopar JL Half Doors custom painted Bikini Pearlcoat w/ premium uppers
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
              Rugged Ridge Reflex stubby 13-inch antenna
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
              Maximus-3 JL Stealth front license plate bracket and frame
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Factor 55 Flatlink E winch shackle (red)
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
          </ul>
        </section>

        <section>
          <h2>Lighting</h2>
          <ul className="build-list">
            <li>Rigid Industries SR-Series Pro Spot/Flood combo 10" lightbar, hardwired</li>
            <li>Rock Hard 4x4 winch guard plus light mount</li>
            <li>Rigid Industries 10" light covers for SR-Series in amber and clear</li>
            <li>Rigid Industries D-Series Pro 3" spot light pair, hardwired</li>
            <li>ZRoadz A-Pillar lower pod-style LED light mounts</li>
            <li>Rigid Industries 3" light covers for D-Series in amber and clear</li>
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
            <li>
              Hothead Headliners hard top kit w/ side window panels and Sound Assassin Strips
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
              Hi-Lift 48" jack (red)
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              STEP 22 11" Hi-Lift jack cover (black)
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              STEP 22 11" Hi-Lift jack cover (black)
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>Dominion Offroad stealth Hi-Lift jack mount kit</li>
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
              iPhone 14 Pro camera
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
              GoPro Hero 9
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Midland T51X3 X-Talker walkie-talkies
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Midland MXT275 15W GMRS MicroMobile two-way radio, hardwired
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Topsy Products Universal CB Mic Mount
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              67designs Jeep JL Rail Mount Series 55 rail mount base
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Midland MXTA25 3dB gain ghost antenna (short trips)
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>
              Midland 6dB gain antenna (long trips)
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>Rugged Radios hood side antenna mount</li>
            <li>
              Baofeng BF-F8HP 8W handheld HAM radio
              {/* <a className="button" href="" target="_blank">
              See It
            </a> */}
            </li>
            <li>Nexar NEXS1 dash cam</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default build
