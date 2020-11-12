import React from "react";
import styled from "styled-components";
import HomeImage from "./HomeImage";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const signReducer = useSelector(({ signReducer }) => signReducer);
  const userToken = signReducer.userToken;
  const history = useHistory();

  return (
    <CardWrapper>
      <div>
        <div>
          <HomeImage imgUrl={props.imgUrl} />
        </div>
        <div>
          <div>
            <div>
              <p>
                {props.city +
                  ", " +
                  props.address1 +
                  "의 " +
                  props.subcategory +
                  " 전체"}
              </p>
              <div>
                <h4>{props.name}</h4>
              </div>
            </div>
            <button onClick={props.fetchLike}>
              {props.like ? (
                <img
                  alt="Heart"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/1290px-Love_Heart_SVG.svg.png"
                  style={{ heigh: "40px" }}
                ></img>
              ) : (
                "♡"
              )}
            </button>
          </div>
          <div onClick={() => history.push(`/homedetails/${props.id}`)}>
            <div></div>
            <p>
              {"최대 인원 " +
                props.capacity +
                "명 · 침실 " +
                props.beds +
                "개 · 침실 " +
                props.rooms +
                "개 · 욕실 " +
                props.bathrooms +
                "개"}
            </p>
            <p>무료 주차 공간·주방·난방·무선 인터넷</p>
          </div>
          <div onClick={() => history.push(`/homedetails/${props.id}`)}>
            {props.discount_price !== undefined && <div>더 낮아진 요금</div>}
          </div>
          <div onClick={() => history.push(`/homedetails/${props.id}`)}>
            <div>
              <span>&#9733;</span>{" "}
              {Math.floor(props.review.avr_score * 10) / 10 + " "}
              <span>{"(" + props.review.reviews + ")"}</span>
            </div>
            <div>
              <div>
                <span>{"₩" + props.price}</span> {"₩" + props.discount_price}
                <span>/1박</span>
              </div>
              <div>
                <div></div>
                <button>총 요금: ₩{props.discount_price}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
    // </Link>
  );
};

export default Card;

const CardWrapper = styled.div`
  height: 250px;
  width: 792px;
  padding: 25px 0;
  border-top: 0.1px solid rgb(200, 200, 200);
  border-bottom: 0.1px solid rgb(200, 200, 200);
  & > div {
    height: 200px;
    width: 792px;
    border: none;
    display: flex;
    & > div:first-child {
      border: none;
      height: 200px;
      width: 300px;
      border-radius: 8px;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 492px;
      padding: 3px 0;
      padding-left: 15px;
      & > div:first-child {
        position: relative;
        & > div {
          & > p {
            font-size: 14px;
            color: rgb(113, 113, 113);
            line-height: 18px;
            margin-bottom: 4px;
          }
          & > div {
            h4 {
              font-size: 18px;
              width: 420px;
              color: rgb(34, 34, 34);
              font-weight: 400;
              line-height: 24px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        }
        & > button {
          font-weight: 1000;
          font-size: 24px;
          color: rgb(34, 34, 34);
          outline: none;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: white;
          position: absolute;
          top: 0;
          right: 0;
          padding: 0;
          &:hover {
            background-color: rgb(245, 245, 245);
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 8px;
        font-size: 14px;
        color: rgb(113, 113, 113);
        font-weight: 400;
        line-height: 18px;
        & > div {
          margin: 0;
          padding: 0;
          width: 35px;
          height: 10px;
          border-top: 0.3px solid rgb(179, 179, 179);
        }
      }
      & > div:nth-child(3) {
        margin-top: 8px;
        & > div {
          border: 0.5px solid rgb(221, 221, 221);
          height: 24px;
          width: fit-content;
          border-radius: 4px;
          padding: 3px 8px;
          font-size: 14px;
          font-weight: 600;
          color: rgb(34, 34, 34);
          line-height: 18px;
        }
      }
      & > div:nth-child(4) {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        & > div:first-child {
          width: auto;
          font-size: 14px;
          font-weight: 600;
          color: rgb(34, 34, 34);
          & > span:first-child {
            color: #fe5131;
          }
          & > span:nth-child(2) {
            font-weight: 400;
            color: rgb(113, 113, 113);
          }
        }
        & > div:nth-child(2) {
          width: auto;
          text-align: right;
          & > div:first-child {
            font-size: 18px;
            line-height: 24px;
            font-weight: 800;
            & > span:first-child {
              color: rgb(113, 113, 113);
              text-decoration: line-through;
              font-weight: 600;
            }
            & > span:nth-child(2) {
              font-weight: 400;
            }
          }
          & > div:nth-child(2) {
            & > button {
              background-color: transparent;
              border: none;
              border-bottom: 1.5px solid rgb(113, 113, 113);
              outline: none;
              cursor: pointer;
              color: rgb(113, 113, 113);
              font-size: 14px;
              font-weight: 400;
              height: 18px;
              padding: 0;
              &:active {
                opacity: 0.6;
              }
              &:hover {
                color: rgb(34, 34, 34);
              }
            }
          }
        }
      }
    }
  }
`;
