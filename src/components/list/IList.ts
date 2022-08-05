import {IItem} from '../../interfaces/IApp';

export interface IList {
  items: IItem[],
  handleToggle: (index: number, checked: boolean) => void,
  handleDelete: (index: number) => void,
}