import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>100 Days challenges</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
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
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/001-profile-card`}>Profile Card</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Add to bag</a>
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