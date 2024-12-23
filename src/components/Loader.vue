<template>
  <div :class="classes.loader" />
</template>

<style module="classes">
.loader {
  border: 8px solid #fafafa;
  border-top: 8px solid #212121;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>