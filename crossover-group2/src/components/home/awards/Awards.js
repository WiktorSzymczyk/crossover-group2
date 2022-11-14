import { Heading } from "../../common/Heading";
import { awards } from "../../data/Data";
import "./Awards.css";

export const Awards = () => {
  return (
    <section className="awards padding">
      <div className="container">
        <Heading
          title="Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services"
          subtitle="Our Awards"
        />

        <div className="content grid4 marginTop">
          {awards.map((award, index) => (
            <div className="box" key={index}>
              <div className="icon">
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
