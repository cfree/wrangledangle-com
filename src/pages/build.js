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
            <li>Superchips Flashcal F5 3571-JL programmer</li>
          </ul>
        </section>

        <section>
          <h2>Drivetrain</h2>
          <ul className="build-list">
            <li>Dana Spicer JL M210 5.13 Gears, front & rear</li>
            <li>ARB diff covers, front & rear</li>
            <li>LT315/70R17C (35-inch) BF Goodrich KO2 all-terrain tires</li>
            <li>Mopar 17"x8" Rubicon Extreme Recon 392 beadlock-capable wheels (smoked bronze)</li>
          </ul>
        </section>

        <section>
          <h2>Suspension & Steering Components</h2>
          <ul className="build-list">
            <li>Mopar 2" lift kit w/ Fox Series shocks</li>
            <li>Fox Factory Race Series 2.0 ATS steering stabilizer</li>
            <li>Steer Smarts Yeti XD JL Griffin XD w/ attenuator - top mount, red belows</li>
            <li>Steer Smarts Yeti XD JL Rubicon tie-rod assembly</li>
            <li>Steer Smarts Yeti XD JL Pro-Series adjustable track bar, front and rear</li>
          </ul>
        </section>

        <section>
          <h2>Exterior</h2>
          <ul className="build-list">
            <li>Warn EVO 10-S winch, winch plate</li>
            <li>Maximus-3 JL Stealth front license plate bracket and frame</li>
            <li>Factor 55 Flatlink E winch shackle (red)</li>
            <li>Rock Hard 4x4 Patriot Series Rocker Guards tube rock sliders</li>
            <li>RokBlokz quick release mud flaps</li>
            <li>Mopar tailgate reinforcement</li>
            <li>Teraflex Alpha HD adjustable tire mounting kit</li>
            <li>Bestop Trektop Slantback soft top (summer)</li>
            <li>Factory hard top (winter)</li>
            <li>Mopar JL Half Doors custom painted Bikini Pearlcoat w/ premium uppers (summer)</li>
            <li>Factory full doors (winter)</li>
            <li>Rugged Ridge Reflex stubby 13-inch antenna</li>
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
            <li>Mopar front grab handles</li>
            <li>Rugged Ridge door sill covers</li>
            <li>Hothead Headliners hard top kit w/ side window panels and Sound Assassin Strips</li>
          </ul>
        </section>

        <section>
          <h2>Equipment & Recovery Gear</h2>
          <ul className="build-list">
            <li>Smittybilt Compact Air System 2747 CO2 tank</li>
            <li>Staun automatic tire deflators</li>
            <li>Vondior tire pressure gauge</li>
            <li>Hi-Lift 48" jack (red)</li>
            <li>STEP 22 11" Hi-Lift jack cover (black)</li>
            <li>Dominion Offroad stealth Hi-Lift jack mount kit</li>
            <li>8-foot tree saver</li>
            <li>Smittybilt snatch block</li>
          </ul>
        </section>

        <section>
          <h2>Accessories</h2>
          <ul className="build-list">
            <li>iPhone 14 Pro camera</li>
            <li>Garmin Oregon 450 GPS</li>
            <li>GoPro Hero 9</li>
            <li>Midland T51X3 X-Talker walkie-talkies</li>
            <li>Midland MXT275 15W GMRS MicroMobile two-way radio, hardwired</li>
            <li>Topsy Products Universal CB Mic Mount</li>
            <li>67designs Jeep JL Rail Mount Series 55 rail mount base</li>
            <li>Midland MXTA25 3dB gain ghost antenna (short trips)</li>
            <li>Midland 6dB gain antenna (long trips)</li>
            <li>Rugged Radios hood side antenna mount</li>
            <li>Baofeng BF-F8HP 8W handheld HAM radio</li>
            <li>Nexar NEXS1 dash cam</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default build
