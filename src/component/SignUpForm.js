import React from "react";

export default function SignUpForm() {
  return (
    <div>
      <form className="">
        <h4>Fill Your Details</h4>
        <div class="mb-3">
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Full Name"
          />
        </div>

        <div class="mb-3">
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Alias"
          />
        </div>

        <div class="mb-3">
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>

        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Repeat Password"
          />
        </div>

        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Repeat Password"
          />
        </div>
        <button
          type="button"
          class="btn btn-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="true"
          style={{ width: "100%" }}
        >
          United State
        </button>
        <div class="mb-3 form-check">
          <p style={{ color: "red" }}>
            *Password should contain atleast one small symbol and a large number
          </p>
        </div>
        <button type="button" class="btn btn-primary" style={{ width: "100%" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
