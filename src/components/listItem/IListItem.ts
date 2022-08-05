import {IItem} from '../../interfaces/IApp';

export interface IListItem extends IItem {
  handleToggle:(checked: boolean) => void;
  handleDelete:() => void;
}