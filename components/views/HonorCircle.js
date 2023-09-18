import { useState } from "react";

import Tab from "../HonorCircle/Tabs";

import Members from "../HonorCircle/Members";
import Supporters from "../HonorCircle/Supporters";
import Partners from "../HonorCircle/Partners";

import { Container, Row, Col } from "react-bootstrap";

const HonorCircle = () => {
  const [count, setCount] = useState(1);

  const handleTabClick = (newCount) => {
    setCount(newCount);
  };

  const componentProps = (num) => {
    return {
      classes: count === num ? "block" : "hidden",
    };
  };

  return (
    <main>
      <Container className="sticky-row">
        <Row className="row gx-2">
          <Tab
            index={1}
            text={"main.btn.members"}
            onClick={handleTabClick}
            count={count}
          />
          <Tab
            index={2}
            text={"main.btn.supporters"}
            onClick={handleTabClick}
            count={count}
          />
          <Tab
            index={3}
            text={"main.btn.partners"}
            onClick={handleTabClick}
            count={count}
          />
        </Row>
      </Container>
      <Members {...componentProps(1)} />
      <Supporters {...componentProps(2)} />
      <Partners {...componentProps(3)} />
    </main>
  );
};

export default HonorCircle;

{
  /* <Col xs="12" md="4" className="py-4 sticky-row d-flex justify-center">
            <Link href={`#hc-3`}>
              <div
                className="d-flex align-items-center"
                onClick={() => handleClick(2)}
              >
                <h4 className="h4-title blue text-center">
                  {t("main.btn.partners")}
                </h4>
                <Arrows num={2} />
              </div>
            </Link>
          </Col> */
}

// const Arrows = ({ num }) => {
//   return (
//     <IconContext.Provider
//       value={{
//         color: "2f4858",
//         size: "2rem",
//       }}
//     >
//       {num === count ? (
//         <AiOutlineArrowDown className="ml-5" />
//       ) : (
//         <AiOutlineArrowUp className="ml-5" />
//       )}
//     </IconContext.Provider>
//   );
// };
