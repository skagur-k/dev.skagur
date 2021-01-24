import styled from "styled-components"
import { Link } from "gatsby"

export const TerminalWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  max-width: 900px;
  width: 900px;
  height: 300px;

  min-height: 300px;
  background-color: var(--component);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px 5px 5px 5px;
`

export const TerminalMenu = styled.div`
  width: 100%;
  height: auto;
  padding: 7px 0;
  background-color: var(--menuBg);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px 5px 0px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Menulist = styled.ul`
  width: 70px;
  margin-left: 5px;
  display: flex;
  align-items: center;
`

const MenuButton = styled.li`
  width: 13px;
  height: 13px;
  margin-left: 5px;
  border-radius: 50%;
`

export const MenuClose = styled(MenuButton)`
  background: #ed6b61;
`

export const MenuMin = styled(MenuButton)`
  background: #ffbc30;
`

export const MenuMax = styled(MenuButton)`
  background: #00cb4d;
`

export const MenuTitle = styled.p`
  font-size: 14px;
  text-align: center;
`

export const TabsList = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
`
export const Tab = styled(Link)`
  width: 25%;
  height: auto;
  background-color: var(--terminalTabUnselect);
  padding: 7px 0 7px;
  text-align: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: var(--text-color);
  text-decoration: none;
  font-size: 14px;

  &.active {
    background-color: var(--terminalTabSelect);
    font-weight: 600;
  }
`

export const Console = styled.div`
  padding: 10px;
  font-family: "Fira Code", Georgia, "Times New Roman", Times, serif;
  font-size: 14px;
`
