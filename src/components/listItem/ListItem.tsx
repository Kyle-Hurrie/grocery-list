// React
import React from 'react';

// Styles
import './ListItem.scss'

// Interfaces
import {IListItem} from './IListItem';

// Icons
// @ts-ignore
import {ReactComponent as Delete} from '../../assets/icons/delete.svg';
// @ts-ignore
import {ReactComponent as CheckboxChecked} from '../../assets/icons/checkboxChecked.svg';
// @ts-ignore
import {ReactComponent as CheckboxUnchecked} from '../../assets/icons/checkboxUnchecked.svg';

const ListItem = (props: IListItem): JSX.Element => {
  const {id, itemName, checked, handleToggle, handleDelete} = props;

  return (
    <>
      <div key={id} className={'item-container'}>
        <div className={'item-container__checkbox'} onClick={() => handleToggle(!checked)}>
          {checked
            ?
            <CheckboxChecked className={'checkbox'}/>
            :
            <CheckboxUnchecked className={'checkbox'}/>
          }
        </div>
        <div className={'item-container__name'}>
          {checked ? <h3 className={'item-name-crossed'}>{itemName}</h3> : <h3 className={'item-name'}>{itemName}</h3>}
        </div>
        <div className={'item-container__delete'}>
          <Delete className={'delete'} onClick={() => handleDelete()}/>
        </div>
      </div>
    </>
  );
}

export default ListItem;
