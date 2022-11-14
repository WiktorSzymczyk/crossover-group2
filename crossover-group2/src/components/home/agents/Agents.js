import { Heading } from "../../common/Heading";
import { team } from "../../data/Data";

export const Agents = () => {
  return (
    <section className="team">
      <div>
        <Heading
          title="Our Featured Agents"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
      </div>
      <div>
        {team.map((item, index) => (
          <div key={index}>
            <button>{item.list} Listings</button>
            <div>
              <div>
                <img src={item.cover} alt={item.name} />
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <i className="fa fa-location-dot"></i>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
