import Layout from "../../components/layout";

import { getAllPostIds } from "../../lib/posts";

export default function Post({ param }) {
  console.log(param);
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params.id);
  return {
    props: {
      param: params.id,
    },
  };
}
