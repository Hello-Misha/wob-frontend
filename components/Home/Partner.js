import { Container, Row, Col } from "react-bootstrap";
import Title from "../ui/Title";

import Image from "next/image";

import partnerLogo from "../../public/img/home/logo.webp";

const Partner = () => {
  return (
    <section className="my-5 ">
      <Container>
        <Row>
          <Col xs="12" md="auto" className="mx-auto my-auto">
            <Title locale="home" text="partner" hr={false} />
          </Col>
          <Col xs="auto" md="auto" className="mx-auto">
            <Image
              src={partnerLogo}
              alt="partner logo"
              className="img-fluid mx-auto"
            />
            <p className="text blue text-center">Women on Boards UK</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partner;
