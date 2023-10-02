import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import { RichTextRenderer } from "@/services/richTextReducer";

import PhotoSlider from "@/components/TechComponents/Carousel";

function NewsPageComponent({ article }) {
  const mainImg =
    process.env.NEXT_PUBLIC_STRAPI_URL2 +
    article.attributes.mainImg.data.attributes.url;
  const galeryArr = [];

  // function galeryArrFetch(arr) {
  //   const uri = article.attributes.galery.data;

  //   if (Array.isArray(uri)) {
  //     uri.forEach((img) => {
  //       if (img.attributes && img.attributes.url) {
  //         arr.push(process.env.NEXT_PUBLIC_STRAPI_URL2 + img.attributes.url);
  //       }
  //     });
  //   }
  // }

  // galeryArrFetch(galeryArr);

  return (
    <main>
      <Container className="mb-5 mt-5">
        <Row>
          <Col md="4" className="mb-3">
            <Image
              src={mainImg}
              alt=""
              // alt={tiding.attributes.mainImgAlt}
              loading="lazy"
              width={600}
              height={600}
              className="img-fluid"
            />
          </Col>
          <Col md="8" className="mb-3">
            <h3 className="Sub-Title-bold DarkBlue mb-3">
              {" "}
              {article.attributes.title}
            </h3>
            <h3 className="Text-bold DarkBlue mb-3">
              {article.attributes.date}
            </h3>
            <p className="Text DarkBlue mb-5">
              {article.attributes.description}
            </p>
            <hr className="mb-5" />

            {RichTextRenderer(article.attributes.newsText)}
            <hr className="mb-5" />
            {/* {galeryArr ? <PhotoSlider imgArr={galeryArr} /> : ""} */}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default NewsPageComponent;
