import css from "./index.module.css";
import CamperItem from "./Camper";
import { useState } from "react";
import { Modal } from "../Modal";
import CamperItemDetails from "./CamperDetails";
import { Message } from "../Message";

export default function CamperList({ campers }) {
  const [showModalEl, setShowModalEl] = useState(null);

  const toggleModal = (el) => {
    showModalEl ? setShowModalEl(null) : setShowModalEl(el);
  };

  if (!campers.length) {
    return (
      <Message
        level="info"
        message="Campers by your filters aren't available"
      />
    );
  }

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
