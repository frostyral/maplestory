import React from 'react';
import '../../styles/account.sass';

function Login() {
  //const classes = styles()
  return (
    <body class="section-login">
      <div class="login-card">
        <div class="login-nav">
          <ul>
            <li>
              <a>LOG IN</a>
            </li>
            <li>
              <a>CREATE AN ACCOUNT</a>
            </li>
          </ul>
          <div class="login-form">
            <h5>Log in to Your Nexon Account</h5>
            <input type="text" class=""></input>
            <span class="checkbox-label">
              Login automatically in the future.
            </span>
            <button>CONTINUE</button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
