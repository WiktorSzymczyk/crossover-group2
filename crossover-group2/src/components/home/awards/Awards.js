import { Heading } from "../../common/Heading";
import { awards } from "../../data/Data";

export const Awards = () => {
  return (
    <section className="awards">
      <div className="container">
        <Heading
          title="Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services"
          subtitle="Our Awards"
        />

        <div>
          {awards.map((award, index) => (
            <div key={index}>
              <div>
                <span>{award.icon}</span>
              </div>
              <h1>{award.num}</h1>
              <p>{award.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
