import { Link } from "react-router-dom";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 100px;
  min-height: 100vh;
  background-color: #212121;
  padding: 1rem;
  border-right: 1px solid #383838;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 0;
  width: 100%;
`;
export const NavListItem = styled.li`
color: #fff;`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem;
  display: block;
  border-radius: 4px;

  &:hover {
    background-color: #383838;
    color: #e0e0e0;
  }

  &.active {
    background-color: #383838;
    color: #e0e0e0; /* 활성 상태 색상 */
  }
`;
export const MainContainer = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f8f8f8;
`;
