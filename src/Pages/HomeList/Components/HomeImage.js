import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function HomeImage(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <WrapperHI>
      <Slider {...settings} imgUrl={props.imgUrl}>
        {props.imgUrl[0] &&
          props.imgUrl.map((el) => {
            return (
              <div>
                <h3>
                  <img className="Haha" src={el} alt="Home Description" />
                </h3>
              </div>
            );
          })}
      </Slider>
    </WrapperHI>
  );
}

const WrapperHI = styled.div`
  .Haha {
    height: 200px;
    width: 300px;
    object-fit: cover;
    border-radius: 8px;
  }

  .slick-arrow {
    z-index: 10;
    .slick-prev {
      &::before {
        position: relative;
        left: 50px;
      }
    }

    .slick-next {
      &::before {
        position: relative;
        left: -50px;
      }
    }
  }

  .slick-dots {
    bottom: 20px;
    height: 10px;

    .slick-active {
      & > button {
        color: white;

        &::before {
          color: white;
          opacity: 0.6;
        }
      }
    }
  }
`;
