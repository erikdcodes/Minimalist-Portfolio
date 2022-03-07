import styled from "styled-components";
import { useRouter } from "next/router";
import DefaultLayout from "../../layouts/DefaultLayout";

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
  return (
    <DefaultLayout>
      <h1>{slug}</h1>
    </DefaultLayout>
  );
};

export default Project;
