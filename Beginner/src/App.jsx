import SearchForm from './Components/SearchForm'
import "./App.css";
import List from "./Components/List";
import * as React from "react";
import axios from "axios";



const useStorageStage = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};

const App = () => {
  const storiesReducer = (state, action) => {
    switch (action.type) {
      case 'STORIES-FETCH-INIT':
        return {
          ...state,
          isLoading:true,
          isError:false
        } 
      case 'STORIES-FETCH-SUCCESS':
        return {
          ...state,
          isLoading:false,
          isError:false,
          data:action.payload
        }
      case 'STORIES-FETCH-FAILURE':
        return {
          ...state,
          isLoading:false,
          isError:true,
        }
      case 'STORIES-REMOVE':
        return {
          ...state,
          data:state.data.filter(
            (story) => action.payload.objectID !== story.objectID
          )
        };
      default: 
        throw new Error();
    }
  };
  
  const API_Endpoint = 'https://hn.algolia.com/api/v1/search?query=';
  const [stories, dispatchStories] = React.useReducer(storiesReducer,{data : [],isLoading:false,isError:false} );
  const [searchTerm, setSearchTerm] = useStorageStage("search", "react");
  const [url,setUrl] = React.useState(
    `${API_Endpoint}${searchTerm}`
  )

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'STORIES-REMOVE',
      payload: item,
    });
  };

  const handleFetchStories = React.useCallback(async()=> {
    dispatchStories({
      type:'STORIES-FETCH-INIT'
    })
    
    try{
    const result = await axios.get(url);

    dispatchStories({
        type:'STORIES-FETCH-SUCCESS',
        payload:result.data.hits
      });
    }catch{
      dispatchStories({
        type:'STORIES-FETCH-FAILURE'
      })
    }
  },[url])

  React.useEffect(() => {
    handleFetchStories()
  }, [handleFetchStories]);

 
  const handleSearchSubmit=(event)=>{
    setUrl(`${API_Endpoint}${searchTerm}`);
    event.preventDefault();
  }
  return (
    <div>
      <h1>Hello</h1>
      <SearchForm searchTerm={searchTerm} handleSearchInput={handleSearchInput} handleSearchSubmit={handleSearchSubmit}/>
      <hr />
      {stories.isError && <p>Something went wrong ...</p>}
      {stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

export default App;
