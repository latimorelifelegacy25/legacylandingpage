import { ReactNode } from 'react';

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ServiceItem {
  title: string;
  icon: ReactNode;
  description: string;
  detailedDescription: string;
}

export interface AppData {
  name: string;
  title: string;
  company: string;
  license: string;
  tagline: string;
  hashtag: string;
  bio: string;
  phone: string;
  email: string;
  bannerUrl: string;
  links: {
    main: string;
    ethos: string;
    booking: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
  services: ServiceItem[];
}
