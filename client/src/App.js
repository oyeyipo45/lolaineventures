import React from "react";
import ProductScreen from './screens/ProductScreen';
import CartScreen from "./screens/CartScreen";
import { Route, Link } from 'react-router-dom';
import SignInscreen from './screens/SignInScreen';
import HomeScreen from "./screens/HomeScreens";


const App = () => {
    
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button className="add" onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">E_COMMERCE</Link>
        </div>
        <div className="header-links">
          <Link to="/cart"> Cart</Link>
          <Link to="/signin">Sign in</Link>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button remove" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>

          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
  <Route path="/" exact={true} component={HomeScreen} />
  <Route path="/product/:id" component={ProductScreen} />
  <Route path="/cart/:id?" component={CartScreen} />
  <Route path="/signin" component={SignInscreen} />
  
          
        </div>
        {/* <div className="down">
          <p className="down-1">
            Until recently, the prevailing view assumed lorem ipsum was born as
            a nonsense text. “It's not Latin, though it looks like it, and it
            actually says nothing,” Before & After magazine answered a curious
            reader, “Its ‘words’ loosely approximate the frequency with which
            letters occur in English, which is why at a glance it looks pretty
            real.” As Cicero would put it, “Um, not so fast.” The placeholder
            text, beginning with the line “Lorem ipsum dolor sit amet,
            consectetur adipiscing elit”, looks like Latin because in its youth,
            centuries ago, it was Latin. Richard McClintock, a Latin scholar
            from Hampden-Sydney College, is credited with discovering the source
            behind the ubiquitous filler text. In seeing a sample of lorem
            ipsum, his interest was piqued by consectetur—a genuine, albeit
            rare, Latin word. Consulting a Latin dictionary led McClintock to a
            passage from De Finibus Bonorum et Malorum (“On the Extremes of Good
            and Evil”), a first-century B.C. text from the Roman philosopher
            Cicero. In particular, the garbled words of lorem ipsum bear an
            unmistakable resemblance to sections 1.10.32–33 of Cicero's work,
            with the most notable passage excerpted below: “Neque porro quisquam
            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.” A 1914 English
            translation by Harris Rackham reads: “Nor is there anyone who loves
            or pursues or desires to obtain pain of itself, because it is pain,
            but occasionally circumstances occur in which toil and pain can
            procure him some great pleasure.” McClintock's eye for detail
            certainly helped narrow the whereabouts of lorem ipsum's origin,
            however, the “how and when” still remain something of a mystery,
            with competing theories and timelines.
          </p>
        </div> */}
      </main>
      <footer className="footer">All Right Reserved.</footer>
    </div>
  );
}

export default App;
