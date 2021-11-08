<template>
  <div class="events container">
    <h2 class="subtitle is-3">Check out our top achievers Pupilys</h2>
    <div class="columns is-multiline">
      <div class="column is-one-quarter">
        <PupilyCard />
      </div>
    </div>
  </div>
</template>
<script>
  import PupilyCard from '@/components/PupilyCard';
  export default {
    name: 'PupilysList',
    components: {
      PupilyCard,
    },
  };
</script>
<style scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>