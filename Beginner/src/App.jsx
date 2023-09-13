import InputWithLabel from './Components/InputWithLabel';
import './App.css'
import List from './Components/List'
import React from 'react'


const useStorageStage = (key,initialState)=>{
  const [value,setValue] = React.useState(localStorage.getItem(key) || initialState);
  React.useEffect(()=>{
    localStorage.setItem(key,value)
  },[value,key]);
  return [value,setValue]
};
const App = ()=> {
  const [searchTerm,setSearchTerm] = useStorageStage('search','react')

  const stories = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  ];
  const handleSearch = (event)=>{
    setSearchTerm(event.target.value)
  }
  const filterList = stories.filter((item)=>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>
      <h1>Hello</h1>
      <InputWithLabel onInputChange={handleSearch} value={searchTerm} id='search' label='Search'/>

      <hr/>
      <List list={filterList}/>
    </div>
    

  )
}

export default App
