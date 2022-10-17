export interface NodeListItem {
  id: string;
  name: string;
}

interface Instruction {
  title: string;
  description: string;
  iconUrl: string;
}

enum ArrowType {
  STRAIGHT,
  LEFT,
  RIGHT,
}
interface Arrow {
  x: number;
  y: number;
  type: ArrowType;
}

interface OverlayItems {
  arrows: Arrow[];
}

export interface Node extends NodeListItem {
  instruction: Instruction;
  imageUrl: string;
  overlayItems: OverlayItems;
}

export interface NavigationResponse {
  nodes: Node[];
  arrivalTime: string;
}

export interface Avoidances {
  [key: string]: string;
}
