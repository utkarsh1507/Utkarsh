import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/X_logo-removebg-preview.png";
import navIcon3 from "../assets/img/gitlogo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/utkarsh-srivastava-707aa61b0/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://x.com/utkarsh15o7"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/utkarsh1507"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright © 2025 Utkarsh Srivastava. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
