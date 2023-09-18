

const InputWithLabel = ({onInputChange,value,id,label,type='text',children,isFocused}) => 
      <>
        <label htmlFor={id}>{children}</label>
        &nbsp;
        <input type={type} id={id} onChange={onInputChange} value={value} autoFocus={isFocused}/>
      </>

export default InputWithLabel
