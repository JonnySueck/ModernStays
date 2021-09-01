import './nav.css'
export default function Nav() {
    return (
        <header id="nav">
          <div id="windbnb_text">
          <img id="windbnb_logo" src="logo.png" alt="logo"/>
          <input type="text" placeholder="Helinski, Finland"/>
          <input type="number" placeholder="Add Guests"/>
          <button>search</button></div>
        </header>
    );
  }