import Item from "./Item";


const List = ({list}) => 
    <div>
      <ul>
        {list.map(({objectID,...item})=>
            <Item {...item} key={objectID}/>
        )}
      </ul>
      
    </div>

export default List
