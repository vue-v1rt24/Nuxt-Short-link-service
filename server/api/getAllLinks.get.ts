import { getAllLinks } from '../db/links';

export default defineEventHandler(async (event) => {
  return await getAllLinks();
});
