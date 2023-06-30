// Делаем перенаправление по ссылки

import { sendRedirect } from 'h3';

export const useExternalRedirect = (url: string, code: number = 302) => {
  // Проверяем валидность ссылки
  if (/^(https?:\/\/)/.test(url)) {
    // Проверяем находимся ли внутри сервера
    if (process.server) {
      const nuxtApp = useNuxtApp();

      if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
        return nuxtApp.callHook('app:redirected').then(() => {
          if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
            return sendRedirect(nuxtApp.ssrContext.event, url, code);
          }
        });
      }
    } else {
      window.location.href = url;
    }
  } else {
    throw new Error('Недопустимое перенаправление');
  }
};
