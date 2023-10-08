import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";

import NewsPageComponent from "../../components/News/NewsPageComponent";

function NewsPage({ article }) {
  return (
    <>
      <Head>
        <title>{article.attributes.metaTitle}</title>
        <meta
          property="og:description"
          content={article.attributes.metaDescription}
        />
      </Head>
      <NewsPageComponent article={article} />
    </>
  );
}

// export async function getServerSideProps({ params, locale }) {
//   const { slug } = params;

//   // Fetch articles with the given slug and locale
//   const articlesResponse = await fetcher(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*&locale=${locale}`
//   );

//   // Find the article with the matching slug
//   const article = articlesResponse.data.find(
//     (obj) => obj.attributes.slug === slug
//   );

//   if (!article) {
//     return {
//       notFound: true, // Return a 404 error if the article is not found
//     };
//   }

//   return {
//     props: {
//       article,
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }

export const getStaticPaths = async () => {
  // Fetch all articles in all locales
  const articlesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`
  );

  // Generate dynamic paths for each article in each locale
  const paths = articlesResponse.data.flatMap((article) =>
    article.locales.map((locale) => ({
      params: { slug: article.attributes.slug },
      locale, // Specify the locale for each path
    }))
  );

  return {
    paths,
    fallback: true,
  };
};

export default NewsPage;
