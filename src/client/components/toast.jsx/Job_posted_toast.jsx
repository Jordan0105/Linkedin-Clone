import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useState } from "react";

const Job_posted_toast = ({ showToast, setShowToast }) => {
  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className=""
        style={{ minHeight: "240px" }}
      >
        <ToastContainer
          className="p-3"
          position={"bottom-end"}
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => {
              setShowToast(false);
            }}
            show={showToast}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Job Alert</strong>
              <small>1 second ago</small>
            </Toast.Header>
            <Toast.Body>
              Your job was successfully posted. Thank you!
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
};
export default Job_posted_toast;
