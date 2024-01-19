<template>
  <div class="checkbox-accept">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="accepted" @change="processAccept" id="checkbox1">
      <label class="form-check-label" for="checkbox1">
        By creating an account you agree to our <a for="redirecting privercy page"  title="redirecting privercy page" rel="noopener" target="_blank"  href="/privacypolicy">Terms & Privacy.</a>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        accepted: false
      }
    },
    methods: {
      processAccept() {
        this.$emit('terms-accepted-event', this.accepted)
      }
    }
  }
</script>