<script setup>
import { ref } from 'vue'
import SubMenuButton from '../components/SubMenuButton.vue'
import DokumenMateri1 from './DokumenMateri1View.vue'

const currentComponent = ref(DokumenMateri1)
const currentIndex = ref(0)

const materiComponents = [
  { component: DokumenMateri1, label: 'CP/ATP', icon: 'book' },
  { component: DokumenMateri1, label: 'KI dan KD', icon: 'file' }
]

function showComponent(component, index) {
  currentComponent.value = component
  currentIndex.value = index
}
</script>

<template>
  <header>
    <div>
      <!-- Home Button -->
      <div><button @click="$router.push('./')">Home</button></div>
      <br />
      <SubMenuButton
        v-for="(materi, index) in materiComponents"
        :key="index"
        :icon="materi.icon"
        @click="showComponent(materi.component, index)"
      >
        <template #heading>
          <span :class="{ 'current-label': currentIndex === index }">{{ materi.label }}</span>
        </template>
      </SubMenuButton>
    </div>
  </header>

  <main>
    <component :is="currentComponent"></component>
  </main>
</template>
<style scoped>
.current-label {
  color: green; /* Set the color of the current label to green */
  cursor: pointer; /* Change cursor to pointer on hover */
}

span:hover {
  cursor: pointer; /* Ensure that cursor changes to pointer when hovering over the label */
}
.current-label {
  color: green; /* Set the color of the current label to green */
}

.current-description {
  color: green; /* Set the color of the current description to green */
}
header {
  line-height: 1.5;

  max-height: 100vh;
}

.logo {
  display: block;

  margin: 0 auto 2rem;
}

nav {
  width: 100%;

  font-size: 12px;

  text-align: center;

  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;

  padding: 0 1rem;

  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;

    place-items: center;

    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;

    place-items: flex-start;

    flex-wrap: wrap;
  }

  nav {
    text-align: left;

    margin-left: -1rem;

    font-size: 1rem;

    padding: 1rem 0;

    margin-top: 1rem;
  }
}
.current-label {
  color: green; /* Style for current label */
  cursor: pointer;
}

button {
  background-color: blue; /* Button color */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 1rem; /* Spacing */
  border-radius: 4px;
}

button:hover {
  background-color: darkblue; /* Hover effect */
}
</style>
