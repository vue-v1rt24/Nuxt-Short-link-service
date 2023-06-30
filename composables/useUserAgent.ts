import { IUserAgent } from 'types/userAgent.types';

export const useUserAgent = (): IUserAgent | null => {
  if (process.server) {
    const nuxtApp = useNuxtApp();
    const req = nuxtApp.ssrContext?.event.node.req;

    if (nuxtApp.ssrContext && req) {
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
      const userAgent = req.headers['user-agent'];

      return {
        ip: typeof ip === 'string' ? ip : ip?.[0],
        userAgent: userAgent || '',
      };
    }
  } else {
    return {
      userAgent: navigator.userAgent,
    };
  }

  return null;
};
