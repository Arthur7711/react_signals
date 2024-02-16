import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, IconButton, Stack } from "@mui/material";
import { logout } from "../../core/api";
import useAuthInfo from "../../store/self";
import LogOutIcon from "../../components/ui/icons/logoutIcon.svg";

export default function HeaderMenu() {
  const { selfState } = useAuthInfo;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event?.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="menu-button"
        aria-controls={open ? "menu-self" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar alt="user" src={selfState.value?.avatar_url} />
      </IconButton>
      <Menu
        id="menu-self"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="user"
              src={selfState.value.avatar_url}
            />
            <span>{selfState.value.displayname}</span>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <img alt="logout" src={LogOutIcon} />
            <span>Logout</span>
          </Stack>
        </MenuItem>
      </Menu>
    </div>
  );
}
