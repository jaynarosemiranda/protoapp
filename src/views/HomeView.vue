<template>
  <MainLayout>
    <HeroSection />
    <SocialLinks />
    <MainPage />
    <AppFeatures />
    <CTASection />
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layout/MainLayout.vue";

import HeroSection from "@/components/HeroSection.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import MainPage from "@/components/MainPage.vue";
import AppFeatures from "@/components/AppFeatures.vue";
import CTASection from "@/components/CTASection.vue";

export default {
  components: {
    MainLayout,
    HeroSection,
    SocialLinks,
    MainPage,
    AppFeatures,
    CTASection,
  },
};
</script>

<style></style>
