

const InputWithLabel = ({onInputChange,value,id,label,type='text'}) => 
      <>
        <label htmlFor={id}>{label}</label>
        &nbsp;
        <input type={type} id={id} onChange={onInputChange} value={value}/>
      </>

export default InputWithLabel
