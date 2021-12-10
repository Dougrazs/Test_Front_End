import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
