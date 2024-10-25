<script setup>
</script>

<template>
    <div class="parallax-banner">
        <div class="parallax-background"></div>
        <div class="parallax-content container">
        </div>
    </div>
</template>

<style scoped>
.parallax-banner {
    position: relative;
    height: 500px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.parallax-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/parallax-banner.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    z-index: -1;
}
.parallax-content {
    text-align: center;
    z-index: 1;
    color: white;
    top: 20%;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    backdrop-filter: blur(1px);
}
</style>