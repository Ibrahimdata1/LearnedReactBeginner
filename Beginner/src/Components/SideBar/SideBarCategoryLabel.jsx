import {SubSideBarLabel} from '../../Styles/SideBar.style'

const SubSideBarItemLabel = ({title}) => {
  return (
    <SubSideBarLabel>
      <input type="radio" name="test" style={{ marginBottom: "4px" }} />
      <label>{title}</label>
    </SubSideBarLabel>
  );
};

export default SubSideBarItemLabel;
