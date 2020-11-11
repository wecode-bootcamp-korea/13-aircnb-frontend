import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LINK redux action
import { takeGuestNumber } from "../../../Redux/Actions/Index";

// LINK styles
import { GuestModal, GuestContents } from "./Guest.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Guest = ({ btnActive }) => {
  const categories = [
    { id: "adults", name: "성인", option: "만 13세 이상" },
    { id: "children", name: "어린이", option: "2-12세" },
    { id: "babies", name: "유아", option: "2세 미만" },
  ];

  const [count, setCount] = useState({
    adults: 0,
    children: 0,
    babies: 0,
  });
  const [disableBtn, setDisableBtn] = useState({
    adults: true,
    children: true,
    babies: true,
  });

  // ANCHOR redux action
  const bookReducer = useSelector(({ bookReducer }) => bookReducer);
  const adults = bookReducer.adults;
  const children = bookReducer.children;
  const babies = bookReducer.babies;

  const dispatch = useDispatch();
  const takeGuestNumberAction = (adult, child, baby) =>
    dispatch(takeGuestNumber(adult, child, baby));

  const countGuest = (e) => {
    e.preventDefault();
    const { name, id } = e.currentTarget.dataset;
    let initNumber = count[id];
    name === "minus" && initNumber > 0 && initNumber--;
    name === "plus" && initNumber++;

    setCount({
      ...count,
      [id]: initNumber,
      ...((id === "children" || id === "babies") &&
        initNumber &&
        name === "plus" &&
        !count["adults"] && { adults: 1 }),
    });

    setDisableBtn({
      ...disableBtn,
      [id]: initNumber < 1 ? true : false,
      ...((id === "children" || id === "babies") && initNumber
        ? { adults: true }
        : { adults: false }),
    });
  };

  useEffect(() => {
    const { adults, children, babies } = count;
    takeGuestNumberAction(adults, children, babies);
  }, [count]);

  useEffect(() => {
    adults === 0 &&
      children === 0 &&
      babies === 0 &&
      setCount({ adults: 0, children: 0, babies: 0 });
  }, [adults, children, babies]);

  return (
    <GuestModal btnActive={btnActive}>
      <ul>
        {categories.map((category, idx) => (
          <li key={idx}>
            <GuestContents>
              <div>
                <span>{category.name}</span>
                <span>{category.option}</span>
              </div>
              <div>
                <button
                  data-name="minus"
                  data-id={category.id}
                  onClick={countGuest}
                  disabled={disableBtn[category.id]}
                >
                  <div>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                </button>
                <span>{count[category.id]}</span>
                <button
                  data-name="plus"
                  data-id={category.id}
                  onClick={countGuest}
                >
                  <div>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </button>
              </div>
            </GuestContents>
          </li>
        ))}
      </ul>
    </GuestModal>
  );
};

export default Guest;
