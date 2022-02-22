<template>
  <button
    ref="container"
    @mousedown="addRipple"
    :class="mode"
    >
    <span class="text">
      <slot></slot>
    </span>
    <span class="ripple"
      v-for="ripple in ripples"
      :key="ripple.id"
      :style="{
        top: ripple.top,
        left: ripple.left,
        width: ripple.width,
        height: ripple.height,
        background: color
      }">
    </span>
  </button>
</template>

<script>
export default {
  name: "r-button",
  props: {
    color: {
      type   : String,
      default: "rgba(255, 255, 255, 0.3)"
    },
    mode: {
      type: String,
      default: "large"
    }
  },
  mounted() {
    const width = this.$refs.container.offsetWidth;
    const height = this.$refs.container.offsetHeight;

    this.rippleWidth = width > height ? width : height;
    this.halfRippleWidth = this.rippleWidth / 2;

  },
  data: () => ({
    ripples: [],
    rippleWidth: 0,
    halfRippleWidth: 0
  }),
  methods: {
    addRipple(e) {
      const { left, top } = this.$refs.container.getBoundingClientRect();
      const rippleId = Date.now();
      
      this.ripples.push({
        width: `${this.rippleWidth}px`,
        height: `${this.rippleWidth}px`,
        left: `${e.clientX - left - this.halfRippleWidth}px`,
        top: `${e.clientY - top - this.halfRippleWidth}px`,
        id: rippleId
      })

      setTimeout(() => {
        this.ripples.shift()
      }, 800)
    },
  }
}
</script>

<style>
  button {
    min-width: 144px;
    position: relative;
    overflow: hidden;
    transition: 400ms;
    color: #fff;
    background-color: #19181a;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  .small {
    height: 42px;
  }

  .medium {
    height: 60px;
  }

  .large {
    height: 72px;
  }

  .text {
    padding: 1rem 1rem;
  }

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 800ms linear;
    background-color: rgba(255, 255, 255, 1);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>