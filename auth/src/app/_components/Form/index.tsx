import { FormEvent } from "react";
import SubmitButton from "../Button/Submit";
import { type Form } from "services/types/UIComponent";
import { ApiError } from "services/app/_lib/errors";

const METHOD = "POST";

const Form: React.FC<Form> = ({ children, ...rest }) => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {

      const formData = new FormData(event.currentTarget);

      if(!rest.beforeSubmit(formData)){
        return;
      }

      const response: Response = await fetch(rest.api, {
        method: METHOD,
        body: formData,
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new ApiError(response.status.toString(), message);
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
