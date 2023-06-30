export interface ILink {
  longUrl: string;
  key: string;
}

export interface ILinkRes {
  id: number;
  longUrl: string;
  key: string;
  totalClicks: number;
  createdAt: Date;
}
