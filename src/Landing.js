import React from "react";
import { Link } from "react-router-dom";
import Layout from "./layouts/index";
import Hero from "./components/hero/Hero";
import HeroIllustration from "./components/hero/HeroIllustration";

export default function Landing() {
  return (
    <Layout>
      {/* <h1>This is our landing page </h1> */}
      <Hero
        title="Landing template for startups"
        content="Our landing page template works for all the devices, so you only have to setup it once, and get beautiful results forever."
        illustration={HeroIllustration}
      />
      {/* <Link to="/home">Click</Link> */}
    </Layout>
  );
}
