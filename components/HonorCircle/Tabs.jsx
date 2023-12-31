// import { useState } from "react";

import { useTranslation } from "next-i18next";
import { Col } from "react-bootstrap";
import classes from "./#HonorCircle.module.scss";
import Link from "next/link";
import Image from "next/image";

import active from "../../public/t-active.svg";
import passive from "../../public/t-passive.svg";

const Tab = ({ index, text, onClick, count }) => {
  const { t } = useTranslation("honorCircle");

  const handleClick = () => {
    onClick(index);
  };

  return (
    <Col
      xs="12"
      className={`py-2 sticky-row d-flex justify-center h-full mt-4 ${
        classes.tabContainer
      } ${count === index ? "classes.active" : classes.passive}`}
    >
      <Link href={`#hc-${index}`}>
        <div
          className={`pt-2 d-flex flex-col md:flex-row align-items-center flex-wrap justify-end md:justify-center mx-auto ${
            count === index ? "block" : "hidden"
          }`}
          onClick={() => handleClick(index)}
        >
          <h4
            className={`${
              count === index ? "text-bold lipstick" : "text white"
            } text-center my-2 mx-auto`}
          >
            {t(text)}
          </h4>
          <Image
            src={count === index ? active : passive}
            alt="triangle icon"
            className="img-fluid my-1 ml-0 md:ml-2"
            width={30}
          />
        </div>
      </Link>
    </Col>
  );
};

export default Tab;
{
  /* <Arrows num={index} />
const Arrows = ({ num }) => {
    return (
      <IconContext.Provider
        value={{
          color: "2f4858",
          size: "2rem",
        }}
      >
        {num === count ? (
          <AiOutlineArrowDown className="ml-5" />
        ) : (
          <AiOutlineArrowUp className="ml-5" />
        )}
      </IconContext.Provider>
    );
  }; */
}
