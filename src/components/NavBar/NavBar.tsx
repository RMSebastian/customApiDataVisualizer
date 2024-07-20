import { ReactNode } from "react";
import "./NavBar.css";

type Props = {
  items: ReactNode;
};
const NavBar = ({ items }: Props) => {
  return <nav className="navbar">{items}</nav>;
};

export default NavBar;
