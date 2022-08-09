// React
import React, {useEffect, useState} from 'react';

// Components
import List from '../list/List';

// Interfaces
import {IItem} from '../../interfaces/IApp';

// Styles
import './GroceryList.scss';

const GroceryList = () => {
  // Constants
  let newId = -1;
  const defaultItem = {
    id: newId--,
    itemName: '',
    checked: false,
  }

  // States
  const [items, setItems] = useState<IItem[]>([]);
  const [item, setItem] = useState<IItem>({...defaultItem});

  // Effects
  useEffect(() => {
    const tempItems = localStorage.getItem('items')
    const tempItemsList = JSON.parse( tempItems && items.length > 0 ? tempItems : '[]')
    setItems(tempItemsList ?? [])
  }, [])

  // Handlers
  const handleAdd = (): void => {
    if (!item.itemName) return;
    const tempItems = [...items];

    tempItems.push(item);
    localStorage.setItem('items', JSON.stringify(tempItems));

    setItems(tempItems);
    setItem({...defaultItem});
  }

  const handleDelete = (index: number) => {
    let tempItems = [...items];
    tempItems?.splice(index, 1);

    localStorage.setItem('items', JSON.stringify(tempItems));
    setItems([...tempItems as Array<IItem>]);
  }

  const handleToggle = (index: number, checked: boolean) => {
    let tempItems = items ? [...items] : [];
    tempItems[index].checked = checked
    setItems(tempItems)
  }

  return (
    <div className="grocery-list">
      <div className={'grocery-wrapper'}>
        <div className={'title-plus-list'}>
          {/*TITLE*/}
          <h1 className={'app-title'}>Grocery List</h1>

          {/*CONTENT*/}
          {items.length === 0
            ?
            /*NO DATA*/
            <h1>Nothing to see, list is empty</h1>
            :
            /*LIST*/
            <List
              items={items ?? []}
              handleToggle={(index: number, checked: boolean) => handleToggle(index, checked)}
              handleDelete={(index: number) => handleDelete(index)}
            />
          }
        </div>

        {/*FORM*/}
        <div className={'item-creation'}>
          {/*ITEM NAME INPUT*/}
          <input
            className={'item-creation-input'}
            type={'text'}
            placeholder={'Please type item name here'}
            onChange={(event) => setItem({...item, itemName: event.target.value})}
            value={item.itemName}
          />

          {/*ITEM NAME SUBMIT*/}
          <button
            className={'item-creation-button'}
            type={'button'}
            onClick={() => handleAdd()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
