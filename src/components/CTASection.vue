<template>
  <section class="cta__section">
    <h2>Last Call to Action</h2>
    <p>Another section content goes here.</p>
    <div class="cta__section--container">
      <div class="automation">
        <CardLayout :bgColor="`#ffc108`">
          <div class="card__inner">
            <img
              class="card__inner--image"
              src="../assets/images/badge.laravel-mix.svg"
              alt=""
            />
            <span class="card__inner--badge"> Automation </span>
          </div>

          <div class="card__description">
            <span> ROLL OUT </span>
            <h4>Automatic Prototyping</h4>
            <p>
              Webpack is the most powerful and flexible asset compilation tool
              available today. With that power, however, comes a certain level
              of complexity.
            </p>
          </div>
        </CardLayout>
      </div>
      <div class="simplicity">
        <CardLayout :bgColor="`#18A2B8`">
          <div class="card__inner">
            <img
              class="card__inner--image"
              src="../assets/images/badge.how-to-read-code.svg"
              alt=""
            />
            <span class="card__inner--badge"> Simplicity </span>
          </div>

          <div class="card__description">
            <span> SIP COFFEE </span>
            <h4>Complexity Simplified</h4>
            <p>
              I know too many backend developers who are stifled by one glaring
              phobia: CSS. How do you contruct a layout when nothing lines up?
            </p>
          </div>
        </CardLayout>
      </div>
    </div>
    <img
      src="../assets/images/bg-decals3.svg"
      alt=""
      class="cta__section--decals"
    />
  </section>
</template>

<script>
import CardLayout from "./layout/CardLayout.vue";

export default {
  components: {
    CardLayout,
  },
};
</script>

<style></style>
