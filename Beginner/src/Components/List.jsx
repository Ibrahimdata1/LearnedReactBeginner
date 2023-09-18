import Item from "./Item";


const List = ({list,onRemoveItem}) => 
    <div>
      <ul>
        {list.map((item)=>
            <Item item={item} key={item.objectID} onRemoveItem={onRemoveItem}/>
        )}
      </ul>
      
    </div>

export default List
