import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    // window.gapi.load("auth2", () => {
    //   gapi.auth2.init({
    //     client_id:
    //       "176036800049-69jua9st2uogi9ontq99ngpf45itptmm.apps.googleusercontent.com",
    //     scope: "profile email",
    //   });
    // });
  }

  render() {
    return <div>google Auth</div>;
  }
}

export default GoogleAuth;
