import React from 'react';
import '../../styles/account.sass';
import logo from '../../media/nexon_logo_text.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Register() {
  //const classes = styles()
  return (
    <body class="section-login">
      <div class="login-card">
        <Link to="/">
          <img
            href="https://www.nexon.com/main/en"
            class="logo"
            src={logo}
            alt="Logo"
          />
        </Link>

        <div class="login-nav">
          <ul>
            <li>
              <a class="button-login" href="/login">
                LOG IN
              </a>
            </li>
            <li>
              <a class="button-register-active" href="/register">
                CREATE AN ACCOUNT
              </a>
            </li>
          </ul>
        </div>
        <div class="register-container">
          <div class="register-form">
            <h5>Enter your country and date of birth </h5>
            <select class="dropdown-country">
              <option value="" disabled selected>
                Select your country
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <a>Why is country selection required?</a>
            <div class="container-dropdown-birthday">
              <select class="dropdown-country">
                <option value="" disabled selected>
                  Month
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select class="dropdown-country">
                <option value="" disabled selected>
                  Day
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select class="dropdown-country">
                <option value="" disabled selected>
                  Year
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
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

export default Register;
