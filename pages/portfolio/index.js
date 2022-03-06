const Portfolio = ({ projects }) => {
  return <div>Portfolio Index</div>;
};

export async function getStaticProps({}) {
  const projects = await fetch("");

  return {
    props: { projects },
  };
}

export default Portfolio;
