import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const NavContainer = styled.nav`
  width: 100%;
  background: #333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;

  .nav-logo {
    width: 120px;
  }

  .links {
    display: flex;
    gap: 20px;

    a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s ease;

      &:hover {
        color: #f1c40f;
      }
    }
  }

  .menu {
    display: none;
  }

  .cart {
    position: relative;
    cursor: pointer;

    span {
      position: absolute;
      top: -5px;
      right: -10px;
      background: red;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    .menu {
      display: block;
    }

    .links {
      display: none;
    }

    .links.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background: #222;
      padding: 10px 0;
    }
  }
`;

export const ShoppingCartIcon = styled(FaShoppingCart)`
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

export const Bg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 500;
  display: ${({ className }) => (className.includes("active") ? "block" : "none")};
`;