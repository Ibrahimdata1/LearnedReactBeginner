import { SubSideBarSpan,SubSideBarLabel, SubSideBarInput } from '../../Styles/SideBar.style'
import {FilterContext} from '../Context';
import React from 'react';

const SubSideBarItemLabel = ({title}) => {
  const {radioHandler} = React.useContext(FilterContext)
  const injectRadioHandler = () =>{
    radioHandler(title);
  };
  return (
    <SubSideBarLabel>
      <SubSideBarInput type='radio' name='checkbox' onChange={injectRadioHandler}/>
      <SubSideBarSpan></SubSideBarSpan>{title}
    </SubSideBarLabel>
  );
};

export default SubSideBarItemLabel;
