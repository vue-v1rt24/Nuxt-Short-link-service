import { prisma } from '.';
import { ILink } from '../types/links.types';

export const addLink = async (link: ILink) => {
  return await prisma.links.create({
    data: link,
    select: {
      id: true,
      longUrl: true,
      key: true,
    },
  });
};

export const getAllLinks = async () => {
  return await prisma.links.findMany({
    select: { id: true, longUrl: true, key: true },
  });
};

export const getLinkById = async (id: string) => {
  return await prisma.links.findUnique({ where: { key: id } });
};
