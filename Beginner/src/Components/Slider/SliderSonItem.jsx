import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";


const SliderSonItem = ({ url, comment}) => {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 1, m: 0 }}
      className="BoxEffect"
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        
          <CardCover>
            <img src={url} loading="lazy" alt="" />
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
