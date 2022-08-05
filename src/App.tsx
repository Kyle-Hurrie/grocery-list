// React
import React from 'react';

// Styles
import './App.scss';

// Interfaces
import GroceryList from './components/groceryList/GroceryList';

const App = () => {
 return (
   <div className={'App'}>
     <div className={'background'}>
       <GroceryList/>
     </div>

   </div>
 )
}

export default App;
