import { addLink } from '../db/links';
import { ILinkRes } from '../types/links.types';

export default defineEventHandler(async (event) => {
  const body = await readBody<ILinkRes>(event);

  const link = await addLink(body);

  return {
    link,
  };
});
