export type BlockType = 'paragraph' | 'h3' | 'image' | 'tip' | 'list';

export interface Marker {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ImageState {
  src: string;
  caption: string;
  zoom: number;
  pan: { x: number; y: number };
  markers: Marker[];
}

export interface ContentBlock {
  id: string;
  type: BlockType;
  content?: string; // HTML string for text/h3/tip
  imageState?: ImageState;
  listItems?: string[]; // For list type
}

export interface Section {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export interface AppState {
  version: string;
  sections: Section[];
}