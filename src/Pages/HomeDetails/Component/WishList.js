import React, { useState } from "react";
import styled from "styled-components";

const WishList = ({ img, title }) => {
  const [acting, setActing] = useState(false);

  return (
    <StyledWishList acting={acting}>
      <img alt="listImg" src={img} />
      <span>{title}</span>
      <div className="likeCon" onClick={() => setActing(!acting)}>
        <span>&#9825;</span>
        {/* <i className="fas fa-heart actLike"></i> */}
        {/* <i className="far fa-heart unActLike"></i> */}
      </div>
    </StyledWishList>
  );
};

export default WishList;

const StyledWishList = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  border-radius: 8px;

  &:hover {
    background-color: rgb(247, 247, 247);
  }

  img {
    display: inline-block;
    width: 64px;
    height: 64px;
    border-radius: 3px;
  }

  span {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin: 20px 0 0 15px;
  }

  .likeCon {
    position: relative;
    font-size: 30px;
    /* right: 20px; */
    left: 200px;
    top: 16px;
  }

  .actLike,
  .unActLike {
    position: relative;
    left: 30px;
    font-size: 40px;
  }

  .actLike {
    color: #ff385c;
    display: ${(props) => (props.acting ? "inline-block" : "none")};
  }

  .unActLike {
    display: ${(props) => (props.acting ? "none" : "inline-block")};
  }
`;
