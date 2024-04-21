import { FormEvent } from "react";
import SubmitButton from "../Button/Submit";
import { type Form } from "services/types/UIComponent";

const METHOD = "POST";

const Form: React.FC<Form> = ({ children, ...rest }) => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    rest.whenSubmit();

    const formData = new FormData(event.currentTarget);

    try {
      const response: Response = await fetch(rest.api, {
        method: METHOD,
        body: formData,
      });

      if (!response.ok) {
        console.log(response)
        throw new Error(response.status.toString());
      }

      const data = await response.json();
      rest.onSuccess(data);
    } catch (error) {
      console.log(error);
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
