<script setup lang="ts">
import FooterBar from './components/FooterBar.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
	<NavBar></NavBar>
	<router-view></router-view>
	<FooterBar></FooterBar>
</template>

<style scoped>
</style>
