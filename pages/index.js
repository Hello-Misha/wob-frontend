import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Head from "next/head";

import Home from "../components/views/Home";

function HomePage() {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("home.title")}</title>
        <meta property="og:description" content={t(`home.description`)} />
      </Head>
      <Home />
    </>
  );
}

export default HomePage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common", "meta"])),
    },
  };
}
