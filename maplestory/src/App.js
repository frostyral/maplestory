
import './styles/Home.sass';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'


function app() {
  return (
    <div className="App">
      
        <head>
        <script src="https://kit.fontawesome.com/37c6d1b1d7.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
        

        </head>
      <NavBar/>


      <Body/>
      
        
        <Footer/>
    </div>
  );
}

export default app;
