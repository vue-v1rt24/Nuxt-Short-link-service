import { getLinkById } from '../db/links';

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);

  try {
    const link = await getLinkById(<string>id);

    if (!link) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Not Found',
        message: 'Страница не найдена',
      });
    }

    return {
      link,
    };
  } catch (error) {
    throw error;
  }
});
