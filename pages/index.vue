<template>
  <div class="container">
    <button @click="getLangs">GET LANGS</button>
    <p>{{ langs }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions({getLangs: 'getLangs'})
  },
  computed: {
    ...mapGetters({langs: 'langs'})
  }
}
</script>

<style>

</style>
