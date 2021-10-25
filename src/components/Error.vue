<template>
     <div  class="alert text-danger" role="alert">
{{error}}
      </div>
</template>

<script>
export default {
    name: 'Error',
    props: ['error']
}
</script>