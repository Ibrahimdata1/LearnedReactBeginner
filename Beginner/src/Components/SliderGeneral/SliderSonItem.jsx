import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CartContext } from '../../Components/Context';
import {motion} from 'framer-motion'

const SliderSonItem = ({item}) => {
  const {changeVidUrl} = React.useContext(CartContext)
  const changeVidUrlFn = () =>{
    changeVidUrl(item)
  }
 
  const boxMotion = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        type:'spring',
        delay:0.5,
        mass:50,
      }
    }
  }
  return (
    <Box
      component={motion.ul}
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 1, m: 0 }}
      className="BoxEffect" onClick={changeVidUrlFn}
      variants={boxMotion}
      initial='hidden'
      animate='visible'
      transition={{type:'spring',duration:3,delay:0.5}}
    >
      <Card component="li" sx={{ minWidth: 200, flexGrow: 1 }}>
        
          <CardCover>
            <img src={item.url} loading="lazy" alt=""/>
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
