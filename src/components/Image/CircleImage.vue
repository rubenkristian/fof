<template>
  <div class="circle" :style="{
    height: `${(size * 10)}px`,
    width: `${(size * 10)}px`
  }">
    <img class="img" :src="url"/>
  </div>
</template>

<script>
export default {
  name: 'circle-image',
  props: {
    url: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 1,
    }
  },
}
</script>

<style>
  .circle {
    overflow: hidden;
    background: rgb(56, 56, 56);
    border-radius: 50%;
    padding: 3px;
    margin: 1rem;
  }
  .img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
</style>