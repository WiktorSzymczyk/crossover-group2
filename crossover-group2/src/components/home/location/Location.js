import { Heading } from "../../common/Heading";
import { location } from "../../data/Data";

export const Location = () => {
  return (
    <section className="location">
      <div>
        <Heading
          title="Explore By Location"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        ></Heading>
        <div>
          {location.map((location) => (
            <div key={location.id}>
              <img src={location.cover} alt={location.name} />
              <div>
                <h5>{location.name}</h5>
                <p>
                  <span>{location.Villas}</span>
                  <span>{location.Offices}</span>
                  <span>{location.Apartments}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
