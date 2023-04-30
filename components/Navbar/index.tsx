import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar mb-3" data-bs-theme="dark">
      <div className="container px-2 ">
        <Link className="navbar-brand pe-3" href="/">
          StrayDB
        </Link>

        <form
          className="d-flex flex-row flex-grow-1"
          action="/api/form"
          method="post"
        >
          <div className="input-group my-3">
            <input
              type="text"
              className="form-control text-light bg-transparent"
              id="searchString"
              name="searchString"
              placeholder="Search for a stray"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}
