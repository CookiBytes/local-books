import React, { Component } from "react";

class Docs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <h1>Docs</h1>
        <p>Get started using local-books!</p>

        {/* Books */}
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">
            Books{" "}
            <span role="img" aria-label="Books">
              📚
            </span>
          </h4>
          <hr />
          <p>
            <b>Why can't I add my book?</b>
          </p>
          <p>
            When adding books, one possibility is that the minimum characters
            for a book title is 5. If it isn't, then it won't add the book to
            the database.
          </p>
          <hr />
          <p>
            <b>How do I edit a book?</b>
          </p>
          <p className="mb-0">
            If you want to edit a book, just click on the title and it'll bring
            you to the book form.
          </p>
          <hr />
          <p>
            <b>Is there a way to delete my book?</b>
          </p>
          <p class="mb-0">Only the admins can delete books.</p>
        </div>

        {/* Accounts */}
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">
            Accounts{" "}
            <span role="img" aria-label="Books">
              📝
            </span>
          </h4>
          <hr />
          <p>
            <b>
              When registering, the Username field says: "Email: " must be a
              valid email
            </b>
          </p>
          <p>
            When registering for a account, the first fill-out field is{" "}
            <b>Username.</b> If you fill in your username, it will give you an
            error. Instead, fill in your email.
          </p>
          <hr />
          <p>
            <b>
              Logging in on the Username field gives me an error: "email" must
              be a valid email
            </b>
          </p>
          <p class="mb-0">
            Logging in is pretty much the same. Fill in your email instead of
            your username.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Docs;
