import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Home/Body';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function app() {
  return (
    <Router>
      <div className="App">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossorigin="anonymous"
          />
          <link
            href="../assets/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        </head>

        <NavBar />
        <Routes>
          <Route path="/" component={Body} />
        </Routes>

        <Body />

        <foot>
          <Footer />
        </foot>
      </div>
    </Router>
  );
}

export default app;
