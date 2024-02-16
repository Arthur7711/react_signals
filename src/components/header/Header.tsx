import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import { pages } from "./constants";
import HeaderMenu from "../headerMenu/HeaderMenu";
import { Button } from "@mui/material";
import Logo from "../../assets/1MAC.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img alt="logo" src={Logo} />
      <nav>
        {pages.map((page) => (
          <NavLink
            style={({ isActive }) => {
              return { background: isActive ? "#D6E7FA" : "none", padding: 0 };
            }}
            to={`/${page.id}`}
            key={page.id}
          >
            <Button sx={{ fontWeight: 600, textTransform: "none" }}>
              {page.title}
            </Button>
          </NavLink>
        ))}
      </nav>
      <div>
        <HeaderMenu />
      </div>
    </header>
  );
};
