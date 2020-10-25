import React, { Component } from "react";

class Profile extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h1>Dashboard</h1>
        <div className="container px-lg-5">
          <div className="row mx-lg-n5">
            <div className="col py-3 px-lg-5 border bg-dark">
              <a href="/books">
                Books{" "}
                <span role="img" aria-label="Books">
                  📚
                </span>
              </a>
            </div>
            <div className="col py-3 px-lg-5 border bg-light">
              <a href="/movies/new">
                Add Book{" "}
                <span role="img" aria-label="Add Book">
                  📝
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="row mx-lg-n5">
            <div className="col py-3 px-lg-5 border bg-light">
              <a href="/library">
                Maps{" "}
                <span role="img" aria-label="Global Maps">
                  🗺
                </span>
              </a>
            </div>
            <div className="col py-3 px-lg-5 border bg-dark">
              <a href="https://books.google.com">
                Search{" "}
                <span role="img" aria-label="Search Emoji">
                  🔍
                </span>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
