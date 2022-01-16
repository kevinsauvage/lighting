import Container from "../../../Layout/Container/Container";
import Section from "../../../Layout/Section/Section";
import "./Capabilities.scss";

const Capabilities = () => {
  const capabilities = [
    {
      title: "Strategy",
      items: [
        "Research",
        "UI/UX audit",
        "Stakeholder workshops",
        "Product strategy",
        "Innovation consulting",
      ],
    },
    {
      title: "Design",
      items: [
        "UI/UX design",
        "Brand identity",
        "Websites and mobile apps",
        "Visual design",
        "Prototyping and testing",
      ],
    },
    {
      title: "Development",
      items: [
        "HTML/CSS/JS",
        "React/Angular",
        "Backend/API integrations",
        "iOS/Android native apps",
        "Rapid prototyping",
      ],
    },
    {
      title: "Content",
      items: ["Copywriting", "Video", "Animation", "Iconography", "2D/3D graphics"],
    },
  ];
  return (
    <Section className="Capabilities">
      <Container className="Capabilities__container">
        <p className="Capabilities__title">Capabilities</p>
        <div className="Capabilities__box">
          {capabilities.map((item, i) => (
            <div key={i} className="Capabilities__box-item">
              <p className="Capabilities__box-item__title">{item.title}</p>
              <div>
                {item.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Capabilities;
