import { FormEvent } from "react";
import SubmitButton from "../Button/Submit";

type FormPropr = {
  children: React.ReactNode;
  onError: <T>(error: T) => void;
  onSuccess: <T>(data: T | undefined) => void;
  api: string;
  buttonStyle?: string;
  buttonPlaceholder: string;
};

const METHOD = "POST";

const Form: React.FC<FormPropr> = ({ children, ...rest }) => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const response: Response = await fetch(rest.api, {
        method: METHOD,
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response.status.toString());
      }

      const data = await response.json();
      rest.onSuccess(data);
    } catch (error) {
      rest.onError(error);
    }
  }

  return (
    <form className="w-full h-full p-2 flex" onSubmit={onSubmit}>
      <div className="flex-1 space-y-4">
        {children}
        <SubmitButton
          placeholder={rest.buttonPlaceholder}
          className={rest.buttonStyle}
        ></SubmitButton>
      </div>
    </form>
  );
};

export default Form;
