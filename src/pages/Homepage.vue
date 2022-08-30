<template>
  <Hero />
  <coverage-locations id="coverage-locations" />
  <pricing id="pricing" />
  <testimonials id="reviews" />
  <our-team id="our-team" />
  <homepage-footer />
</template>

<script>
import Footer from "../partials/Footer.vue";
import Ourteam from "../partials/OurTeam.vue";
import Locations from "../partials/Locations.vue";
import Testimonials from "../partials/Testimonials.vue";
import Pricing from "../partials/Pricing.vue";
import Hero from "../partials/Hero.vue";
export default {
  components: {
    homepageFooter: Footer,
    ourTeam: Ourteam,
    coverageLocations: Locations,
    Testimonials,
    Pricing,
    Hero,
  },
};
</script>

<style></style>
