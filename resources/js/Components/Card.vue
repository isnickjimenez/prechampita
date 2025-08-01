
<template>
  
  <div class="pricing-card">
    <h3 class="plan-title">{{ title }}</h3>
    <img :src="image" alt="Plan image" class="plan-image" />
    <div class="separator"></div>
    <ul class="features">
      <li v-for="(feature, index) in features" :key="index">
        <span :class="feature.included ? 'check' : 'cross'">✔</span> {{ feature.text }}
      </li>
    </ul>
    <button class="subscribe-btn">Suscribirse</button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  features: Array
});
</script>

<style scoped>
.pricing-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 320px;
  transition: transform 0.3s ease-in-out;
}

.pricing-card:hover {
  transform: scale(1.05);
}

.plan-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
}

.plan-image {
  width: 100px;
  height: auto;
  margin: 10px auto;
}

.separator {
  width: 50px;
  height: 3px;
  background: #f7bf0a;
  margin: 10px auto;
}

.features {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.features li {
  font-size: 16px;
  color: #333;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.check {
  color: #fbff00;
  font-weight: bold;
  margin-right: 8px;
}

.cross {
  color: red;
  font-weight: bold;
  margin-right: 8px;
}

.subscribe-btn {
  background: #d76700;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
}

.subscribe-btn:hover {
  background: #e4d500;
}

.pricing-section {
  text-align: center;
  padding: 40px;
}

.pricing-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>