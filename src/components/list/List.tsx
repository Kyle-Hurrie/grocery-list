// React
import React from 'react';

// Component
import ListItem from '../listItem/ListItem';

// Styling
import './List.scss';

// Interface
import {IItem} from '../../interfaces/IApp';
import {IList} from './IList';

const List = (props: IList) => {
  return (
   <div id={'list'}>
     <div className={'container'}>
       {props.items.map((item: IItem, index: number) =>
         <ListItem
           {...item}
           handleToggle={(checked) => props.handleToggle(index, checked)}
           handleDelete={() => props.handleDelete(index)}
         />
       )}
     </div>
   </div>
  );
}

export default List;
