// React
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
// Styles
import './App.scss';

// Interfaces
import GroceryList from './components/groceryList/GroceryList';

const App = () => {
 return (
   <BrowserRouter basename={'/'}>
     <div className={'App'}>
       <div className={'background'}>
         <GroceryList/>
       </div>
     </div>
   </BrowserRouter>

 )
}

export default App;
