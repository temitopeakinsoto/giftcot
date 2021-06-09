import React from "react";
import Layout from "./layouts/index";
import Hero from "./components/hero/Hero";
import HeroIllustration from "./components/hero/HeroIllustration";

export default function Landing() {
  return (
    <Layout>
      <Hero
        title="Giftcot"
        content="Do you find yourself forgetting birthdays, anniversaries & occasions, and also sometimes what to buy for these occasions?"
        content2 ="We can help because we have a lot of ideas about how to make your occasion memorable. So here we are asking for your support."
        content3= "We'd like to request 3 minutes of your time to tell us if our product helps you to solve these problem & if you really like it would you then like to pay for it."
        illustration={HeroIllustration}
      />
    </Layout>
  );
}
