import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wrangle Dangle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <header className="main-header">
        <img
          src="/assets/img/montego.jpg"
          alt="@wrangle_dangle"
          height="100"
          width="100"
        />
        <h1>@wrangle_dangle</h1>
      </header>

      <ul className="linktree">
        <li>
          <Link to="/build">Build</Link>
        </li>
        <li>
          <a href="https://instagram.com/wrangle_dangle">Instagram</a>
        </li>
      </ul>
    </div>
  )
}
