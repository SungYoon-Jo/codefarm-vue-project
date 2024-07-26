<template>
  <div class="error">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: ["message"],
};
</script>
