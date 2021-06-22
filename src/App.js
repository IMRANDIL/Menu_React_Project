import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';




const allCategories = ['all', ...new Set(items.map((item)=>item.category))]  ;





function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItem(items);
      // had to add return
      return;
    }
    let newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems)
  }



  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menuItem={menuItem} />
    </section>
  </main>
}

export default App;
