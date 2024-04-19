import { FormEvent } from "react";

type FormPropr = {
  childer: React.ReactNode;
  onError: <T>(error: T) => void;
  onSuccess: <T>(data: T | undefined) => void;
  api: string;
};

const METHOD = "POST";

const Form: React.FC<FormPropr> = ({ childer, ...rest }) => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    try {
      const response: Response = await fetch(rest.api, {
        method: METHOD,
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      const data = await response.json();
      rest.onSuccess(data);
    } catch (error) {
      rest.onError(error);
    }
  }

  return (
    <form className="w-full h-auto p-2 flex" onSubmit={onSubmit}>
      <div className="grow gap-y-4">{childer}</div>
    </form>
  );
};

export default Form;
