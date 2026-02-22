import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <title>Little Lemon | Mediterranean Restaurant in Chicago</title>

        <meta
          name='decription'
          content='Little Lemon is family-owned Mediterranean restaurant in Chicago offering fresh seasonal dishes and easy online table reservations.'
        />

        <meta
          property='og:title'
          content='Little Lemon | Fresh Mediterranean Dining in Chicago'
        />

        <meta property='og:description' content="Reserve a table online and explore weekly specials at Little Lemon, Chicago's favorite Mediterranean restaurant." />
        <meta property='og:image' content='' />
        <meta property='og:type' content='website' />
      </head>
      <main>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </main>
    </>
  );
}

export default App;
