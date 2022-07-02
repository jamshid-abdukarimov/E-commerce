import React from "react";
import "./modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { hideModalAction } from "../../redux/reducers/productsReducer";

const Modal = () => {
  const { imgUrl } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(hideModalAction())}
      className="img-modal"
      style={{ zIndex: 10000 }}
    >
      <img onClick={(e) => e.stopPropagation()} src={imgUrl} alt="" />
    </div>
  );
};

export default Modal;
