<script setup lang="ts">
const config = useRuntimeConfig();

//
const props = defineProps<{
  link: {
    id: number;
    key: string;
    longUrl: string;
  };
}>();

//
const handleCopy = () => {
  navigator.clipboard.writeText(`${config.public.appUrl}/${props.link.key}`);
  alert('Скопировано в буфер обмена');
};
</script>

<template>
  <div class="link">
    <div class="link__info">
      <div class="link__short">{{ link.key }}</div>
      <div class="link__long">{{ link.longUrl.substring(0, 20) }}...</div>
    </div>

    <button type="button" @click="handleCopy">Скопировать</button>
  </div>
</template>

<style lang="css" scoped>
.link {
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.link__short {
  font-size: 18px;
  color: blueviolet;
  margin-bottom: 5px;
}

.link__long {
  font-size: 14px;
}
</style>
