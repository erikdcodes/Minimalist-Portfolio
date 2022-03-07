import styled from "styled-components";
import { useRouter } from "next/router";

// layout
// hero image
// section component
// project background title
// project background text
// static previews
// links
// call to action

const Project = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <div>{slug}</div>;
};

export default Project;
