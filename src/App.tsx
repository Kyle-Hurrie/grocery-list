// React
import React from 'react';
import {HashRouter} from 'react-router-dom';
// Styles
import './App.scss';

// Interfaces
import GroceryList from './components/groceryList/GroceryList';

const App = () => {
 return (
   <HashRouter basename={'/'}>
     <div className={'App'}>
       <div className={'background'}>
         <GroceryList/>
       </div>
     </div>
   </HashRouter>

 )
}

export default App;
