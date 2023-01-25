<template>
  <div class="grid-container">
    <div class="btn-group">
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
        >
        {{ tab }}
      </button>
    </div>
    <KeepAlive exclude="SectionOne">
      <component :is="tabs[currentTab]" class="tab" />
    </KeepAlive>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import SectionForm from '../components/keepAlive/SectionForm.vue';
  import SectionOne from '../components/keepAlive/SectionOne.vue';
  import SectionTwo from '../components/keepAlive/SectionTwo.vue';

  const currentTab = ref('SectionForm');
  const tabs = { SectionForm, SectionOne, SectionTwo };
</script>
