import css from "./index.module.css";
import CamperItem from "./Camper";
import { useState } from "react";
import { Modal } from "../Modal";
import CamperItemDetails from "./CamperDetails";

export default function CamperList({ campers }) {
  const [showModalEl, setShowModalEl] = useState(null);

  const toggleModal = (el) => {
    showModalEl ? setShowModalEl(null) : setShowModalEl(el);
  };

  return (
    <>
      <div className={css.list}>
        {campers.map((el) => (
          <CamperItem el={el} key={el.id} showModal={toggleModal} />
        ))}
      </div>

      {showModalEl && (
        <Modal onClose={() => toggleModal()}>
          <CamperItemDetails
            el={showModalEl}
            key={showModalEl.id}
            showModal={toggleModal}
          />
        </Modal>
      )}
    </>
  );
}
