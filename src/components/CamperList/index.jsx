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

  return (
    <>
      {campers.length > 0 ? (
        <div className={css.list}>
          {campers.map((el) => (
            <CamperItem el={el} key={el.id} showModal={toggleModal} />
          ))}
        </div>
      ) : (
        <Message
          level="info"
          message="Campers by your filters aren't available"
        />
      )}
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
