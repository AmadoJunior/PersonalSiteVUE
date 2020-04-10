<template>
  <transition name="routerTransition">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  
};
</script>
<style>
.routerTransition-enter-active, .routerTransition-leave-active {
  transition: 0.5s;
}

.routerTransition-enter-active{
  transition-delay: 0.5s;
}

.routerTransition-enter, .routerTransition-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.routerTransition-enter-to, .routerTransition-leave {
  opacity: 1;
  transform: translateY(0px);
}
</style>