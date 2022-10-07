import React from 'react';
import '../../styles/account.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
  //const classes = styles()
  return (
    <body class="section-login">
      <div class="login-card">
        <div class="login-nav">
          s
          <ul>
            <li>
              <a class="button-login">LOG IN</a>
            </li>
            <li>
              <a class="button-create">CREATE AN ACCOUNT</a>
            </li>
          </ul>
        </div>
        <div class="login-container">
          <div class="login-form">
            <h5>Log in to Your Nexon Account</h5>
            <input
              type="text"
              class="login-input"
              placeholder="Email Address or Nexon ID"
            ></input>
            <button>CONTINUE</button>

            <li class="login-trouble">
              <a href="https://www.nexon.com/account/en/self-service/">
                Trouble Logging in?
              </a>
            </li>
            <div class="login-captcha">
              This site is protected by reCAPTCHA Enterprise and the
              Google
              <a href="https://policies.google.com/privacy?hl=en">
                Privacy Policy
              </a>
              and
              <a href="https://policies.google.com/terms?hl=en">
                Terms of Service
              </a>
              apply.
            </div>
          </div>
          <div class="login-social">
            <ul>
              <button class="button-google">
                <i class="fa-brands fa-google"></i>
                Continue with Google
              </button>
              <button class="button-facebook">
                <i class="fa-brands fa-square-facebook"></i>Continue
                with Facebook
              </button>
              <button class="button-apple">
                <i class="fa-brands fa-apple"></i>Continue with Apple
              </button>
              <button class="button-twitter">
                <i class="fab fa-twitter"></i> Continue with Twitter
              </button>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
