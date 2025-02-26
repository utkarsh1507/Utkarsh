import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/realestate.png";
import projImg2 from "../assets/img/nft.png";
import projImg3 from "../assets/img/discord.png";
import projImg4 from "../assets/img/voting.png";
import projImg5 from "../assets/img/blockchain.png";
import projImg6 from "../assets/img/web3shop.png";
import projImg7 from "../assets/img/dexx.png";
import projImg8 from "../assets/img/daoo.png";




import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Utkarsh Estates",
      description: "A WEB3 Powered Real Estate App",
      imgUrl: projImg1,
      repoUrl: "https://github.com/utkarsh1507/Web-3.0-Real-Estate-App-"
    },
    {
      title: "NFT Market Place",
      description: "Market Place for ERC721 Tokens",
      imgUrl: projImg2,
      repoUrl: "https://github.com/utkarsh1507/NFT-MarketPlace"
    },
    {
      title: "Discord Clone",
      description: "WEB3 Version of popular Discord Server I call it UtkarshCord",
      imgUrl: projImg3,
      repoUrl: "https://github.com/utkarsh1507/UtkarshCord"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Check out my awesome Web3 projects! I've built innovative blockchain applications, from NFTs to DeFi and beyond. Dive into the code and explore them on my GitHub</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            title="WEB3 Voting"
                            description="A unique Web3 app for decentralized voting"
                            imgUrl={projImg4}
                            repoUrl="https://github.com/utkarsh1507/Decentralized-Voting"
                          />
                          <ProjectCard
                            title="Blockchain Simulation"
                            description="This project is a simple Bitcoin blockchain simulation implemented in Python. It demonstrates core blockchain principles such as Proof-of-Work (PoW) consensus mechanism and SHA-256 hashing for block integrity."
                            imgUrl={projImg5}
                            repoUrl="https://github.com/utkarsh1507/Blockchain_Simulation"
                          />
                          <ProjectCard
                            title="WEB3 Shopping App"
                            description="WEB3 Ecommerce Platform"
                            imgUrl={projImg6}
                            repoUrl="https://github.com/utkarsh1507/WEB3-Shopping-App"
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard
                            title="Decentralized Exchange"
                            description="A DEX (Decentralized Exchange) that app enables peer-to-peer cryptocurrency trading without intermediaries, using smart contracts for secure transactions. It provides users with full control over their funds while ensuring transparency and decentralization."
                            imgUrl={projImg7}
                            repoUrl="https://github.com/yourusername/special-web3-project"
                          />
                          <ProjectCard
                            title="DAO Platform"
                            description="A decentralized autonomous organization platform"
                            imgUrl={projImg8}
                            repoUrl="https://github.com/yourusername/dao-platform"
                          />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Design" />
    </section>
  );
}
