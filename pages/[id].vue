<script setup lang="ts">
const { params } = useRoute();

if (!params.id) {
  throw createError({
    statusCode: 404,
    statusMessage: '404 Not Found',
    message: 'Страница не найдена',
  });
}

const { data, error } = await useFetch('/api/getLinkById', {
  params: { id: params.id },
});

//
if (data.value?.link.longUrl) {
  useUserAgent();
  useExternalRedirect(data.value.link.longUrl);
}
</script>

<template>
  <div class="container">
    <div v-if="error">{{ error.data.message }}</div>
    <div v-else>{{ params.id }}</div>
  </div>
</template>

<style lang="css" scoped></style>
