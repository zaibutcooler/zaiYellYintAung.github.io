<template>
  <section class="page" id="portfolio">
    <div class="container mx-auto">
      <div class="text-center">
        <h1 class="grand_title">Qualifications</h1>
        <p class="title_description">My Personal Journey</p>
        <div class="timeline">
          <div class="timeline-row">
            <div class="dot"></div>
          </div>
          <div class="timeline-row">
            <div class="line"></div>
          </div>
          <div class="timeline-row">
            <div class="dot"></div>
          </div>
          <div class="timeline-row">
            <div class="line"></div>
          </div>
          <div class="timeline-row">
            <div class="dot"></div>
          </div>
          <div class="timeline-row">
            <div class="line"></div>
          </div>
          <div class="timeline-row">
            <div class="card"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QualificationsPage",
});
</script>

<style scoped>
.page {
  /* Add any additional styles for the page container */
}

.grand_title {
  /* Add any additional styles for the grand title */
}

.title_description {
  /* Add any additional styles for the title description */
}

.timeline {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.timeline-row {
  display: flex;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333;
  margin: 0 8px;
}

.line {
  width: 2px;
  height: 60px; /* Adjust height as needed */
  background-color: #333;
}

.card {
  width: 200px; /* Adjust width as needed */
  height: 100px; /* Adjust height as needed */
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin: 0 8px;
}

.content {
  /* Add any additional styles for the content container */
}

.timeline-item {
  /* Add any additional styles for the timeline items */
}
</style>
