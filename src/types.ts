export interface Project {
  id: number;
  title: string;
  category?: string;
  description?: string;
  tags?: string[];
  imageThumb: string;
  link?: string;
  year?: string;
  role?: string;
  longDescription?: string;
  challenges?: string;
  solution?: string;
  gallery?: string[];
  imageVisual?: string;
  imageMain?: string;
  imageSub?: string[];
  imageMob?: string[];
  keyPoints?: string[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
}

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}
