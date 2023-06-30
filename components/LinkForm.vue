<script setup lang="ts">
import { ILink } from 'types/links.types';

//
const emit = defineEmits<{
  created: [link: ILink];
}>();

//
const form = reactive({
  longUrl: '',
  key: '',
});

//
const createShortKey = () => {
  form.key = randomId();
};

const handleLinkForm = async () => {
  if (!form.longUrl || !form.key) {
    return alert('Заполните все поля');
  }

  try {
    const { link } = await $fetch('/api/createLink', {
      method: 'POST',
      body: form,
    });

    alert('Ссылка успешно создалась');

    emit('created', link);

    form.longUrl = '';
    createShortKey();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

//
onMounted(() => {
  createShortKey();
});
</script>

<template>
  <div class="container">
    <form @submit.prevent="handleLinkForm" class="form">
      <div class="form-controller">
        <label for="long">Длинная ссылка</label>
        <input type="text" name="long" id="long" v-model="form.longUrl" />
      </div>

      <div class="form-controller">
        <label for="key">Ключ</label>
        <input type="text" name="key" id="key" v-model="form.key" />
      </div>

      <button type="submit" class="form__button">Создать</button>
    </form>
  </div>
</template>

<style lang="css" scoped>
.form {
  display: flex;
  align-items: center;
  column-gap: 30px;
  margin-bottom: 30px;
}

.form-controller label {
  display: block;
  margin-bottom: 5px;
}

.form-controller input {
  padding: 8px 10px;
}

.form__button {
  height: 38px;
  margin-top: 20px;
}
</style>
