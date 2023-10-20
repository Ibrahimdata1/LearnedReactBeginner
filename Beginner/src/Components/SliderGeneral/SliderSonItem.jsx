import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CartContext } from '../../Components/Context';

const resolution = window.innerWidth;
const isMobile = resolution <= 420;
const SliderSonItem = ({item}) => {
  const {changeVidUrl} = React.useContext(CartContext)
  const changeVidUrlFn = () =>{
    changeVidUrl(item)
  }
 
  return (
    <Box
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 1, m: 0 ,justifyContent:'center'}}
      className="BoxEffect" onClick={changeVidUrlFn}
    >
      <Card component="li" sx={isMobile ? { minWidth: 200, flexGrow: 1,maxHeight:'20vh',maxWidth:'60vw'}:{ minWidth: 200, flexGrow: 1}}>
        
          <CardCover>
            <img src={item.url} alt="" style={{objectFit:'cover'}}/>
          </CardCover>
        
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 30, sm: 21 }}
          ></Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default SliderSonItem;
