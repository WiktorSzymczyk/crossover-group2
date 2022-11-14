import { Heading } from "../../common/Heading";
import { location } from "../../data/Data";
import "./Location.css";
export const Location = () => {
  return (
    <section className="location padding">
      <div className="container">
        <Heading
          title="Explore By Location"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        ></Heading>
        <div className="content grid3 marginTop">
          {location.map((location) => (
            <div className="box" key={location.id}>
              <img src={location.cover} alt={location.name} />
              <div className="overlay">
                <h5>{location.name}</h5>
                <p>
                  <label>{location.Villas}</label>
                  <label>{location.Offices}</label>
                  <label>{location.Apartments}</label>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
