import { useState } from "react";
import style from "./LoginRegister.module.scss";
import { Login } from "./LoginForm";
import { Registration } from "./RegistrationForm";
import { UserProvider } from "../../components/Context/UserContext";
import clsx from "clsx";

type FormRegistrationProps = {
  stateForm: boolean;
  onClose: () => void;
  isLoginSeccuses: () => void;
};

type ActionType = "Sign In" | "Sign Up";

export const LoginRegistration = ({
  stateForm, onClose,
}: FormRegistrationProps) => {
  const [action, setAction] = useState<ActionType>("Sign Up");

  return (
    <UserProvider>
      <div
        className={clsx(style.mainWrapper, { [style.active]: stateForm })}
        onClick={onClose}
      >
        <div
          className={style.wrapperForm}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={style.typeOperationClose}>
            <div className={style.typeOperation}>
              <span
                onClick={() => setAction("Sign In")}
                className={clsx(style.signIn, {
                  [style.activeButton]: action === "Sign In",
                })}
              >
                Sign In
              </span>
              <span
                onClick={() => setAction("Sign Up")}
                className={clsx(style.signUp, {
                  [style.activeButton]: action === "Sign Up",
                })}
              >
                Sign Up
              </span>
            </div>
            <div className={style.close}>
              <button
                onClick={onClose}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
          </div>
          {action === "Sign Up" ? (
            <Registration />
          ) : action === "Sign In" ? (
            <Login />
          ) : (
            ""
          )}
        </div>
      </div>
    </UserProvider>
  );
};
