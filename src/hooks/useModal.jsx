import { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";

export const useModal = () => useContext(ModalContext);
