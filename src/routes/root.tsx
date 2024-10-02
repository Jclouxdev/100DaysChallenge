import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1><a href="https://app.bigdevsoon.me/challenges" target="blank">100 Days challenges</a></h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="qinput"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="qinput"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit" id="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/001-profile-card`}>Profile Card</a>
              </li>
              <li>
                <a href={`/002-add-to-cart`}>Add to bag</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail" className="w-full h-full">
          <Outlet />
        </div>
      </>
    );
  }