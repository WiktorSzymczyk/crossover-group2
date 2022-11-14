import { footer } from "../data/Data";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Need More Information?</h1>
              <p>let us know.</p>
            </div>
            <button className="btn5">Contact Us</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="Like Home" />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates straignt in your inbox every month</p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>2022 Coppyright Crossover Groupe 2</span>
      </div>
    </>
  );
};

export default Footer;
