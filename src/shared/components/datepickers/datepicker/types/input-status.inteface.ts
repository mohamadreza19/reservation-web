export interface InputStatus {
  status: 'open' | 'closed';
  type: InputType;
}

export type InputType = 'left' | 'center' | 'right';
