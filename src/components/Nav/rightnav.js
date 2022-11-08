import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
        list-style: none;
        display: flex;
        flex-flow: row nowrap;

    .li {
        padding: 18ox 18px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 380px;
        padding-top: 3.5rem;
    }
`

const Rightnav = () => {
  return (
    <ul>
      <li>Home</li>
      <li>Brands</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

export default Rightnav;
