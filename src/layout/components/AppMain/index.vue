<template>
  <Transition name="slide-fade" mode="out-in">
    <RouterView :key="$route.path" v-slot="{ Component }">
      <div class="app-main">
        <Component :is="Component" />
      </div>
    </RouterView>
  </Transition>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  width: 100%;
}
</style>
