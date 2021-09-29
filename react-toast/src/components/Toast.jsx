import React, { useContext } from "react";
import useToast from "../hooks/useToast";
function Toast({ position, autoDeleteInterval }) {
  const [ toasts, {deleteToast}] = useToast();

  return (
    <div>
      {toasts.map((toast) => {
        if (autoDeleteInterval) {
          setInterval(() => {
            deleteToast(toast.id);
          }, autoDeleteInterval);
        }
        return (
          <div key={toast.id} id={toast.id}>
            <div
              onClick={() =>
                  deleteToast(toast.id)
              }
            >
              Close Btn
            </div>
            <div>Toast Msg</div>
            <div>Toast Desc</div>
          </div>
        );
      })}
    </div>
  );
}

export default Toast;
