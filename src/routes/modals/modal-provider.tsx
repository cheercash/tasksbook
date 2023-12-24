import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  categoryCreation,
  categoryDeletion,
  forgotPassword,
  premium,
  signIn,
  signUp,
  taskCreation,
  taskDeletion,
  taskEditing,
} from ".";

export type ModalProviderProps = {};

const modals: Record<string, JSX.Element> = {
  "create-category": <categoryCreation.UI />,
  "delete-category": <categoryDeletion.UI />,
  "forgot-password": <forgotPassword.UI />,
  premium: <premium.UI />,
  "sign-in": <signIn.UI />,
  "sign-up": <signUp.UI />,
  "create-task": <taskCreation.UI />,
  "delete-task": <taskDeletion.UI />,
  "edit-task": <taskEditing.UI />,
};

// TODO
export const ModalProvider = ({}: ModalProviderProps) => {
  const [isAvailable, setIsAvailable] = useState(false);

  const { query, replace } = useRouter();

  const modalName = query.modal ? query.modal.toString() : null;

  useEffect(() => {
    if (JSON.stringify(query) !== "{}") {
      if (modalName && modalName in modals) {
        setIsAvailable(true);
      } else {
        const lastQuery = structuredClone(query);

        delete lastQuery.modal;

        replace({ query: lastQuery }, undefined, {});
      }
    }
  }, [modalName, query]);

  if (isAvailable) {
    return <div>{modals[query.modal!.toString()]}</div>;
  }

  return <></>;
};
