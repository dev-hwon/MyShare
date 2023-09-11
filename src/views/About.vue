<template>
  <div>
    <h2>About</h2>
    <p>This is the About page.</p>
    <button @click="callGlobalFunction">전역 함수 호출</button>
  </div>
</template>

<script>

export default {
  methods : {
    callGlobalFunction() {
      this.$myGlobalFunction(); // 전역 함수 호출
    }
  }
}
</script>
