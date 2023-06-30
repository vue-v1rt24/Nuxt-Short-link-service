<script setup lang="ts">
import { ILink } from 'types/links.types';

//
const { data: links, error } = await useFetch<ILink[]>('/api/getAllLinks');

//
const created = (link: ILink) => {
  links.value?.push(link);
};
</script>

<template>
  <div>
    <LinkForm @created="created" />

    <div class="container">
      <div v-if="error">Данные не получены. Зайдите позже.</div>

      <div v-else-if="!links?.length">Данных пока нет. Создайте короткую ссылку.</div>

      <template v-else>
        <LinkItem v-for="link in links" :key="link.id" :link="link" />
      </template>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
