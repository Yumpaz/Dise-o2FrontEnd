import * as React from "react";
import { Typography, IconButton, ButtonGroup } from "@mui/material";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const UserItem = (props) => {
  const { name, country, email, telefono, id } = props.user;
  return (
    <Card
      sx={{
        width: 200,
        height: 260,
        maxWidth: "100%",
        boxShadow: "lg",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar
          src="/images/avatar"
          sx={{
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            "--Avatar-size": "8rem",
          }}
        />
        <Typography sx={{paddingTop: "10px", fontWeight: "bold", color: "black" }}>
          {name}
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              bgcolor: "background.surface",
            }}
          >
            <IconButton>
              <MoreHorizIcon
                sx={{ width: "40px", height: "40px", color: "black" }}
              />
            </IconButton>
            <IconButton>
              <DeleteForeverIcon
                sx={{ width: "40px", height: "40px", color: "red" }}
              />
            </IconButton>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
};

export default UserItem;
