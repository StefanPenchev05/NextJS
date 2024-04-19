import style from './style.module.css'

type SubmitButtonProps = {
    placeholder: string;
    className?:string
}

const index: React.FC<SubmitButtonProps> = ({...rest}) => {
  return (
    <button type='submit' className={`${style.submitButton} ${rest.className}`}>
        {rest.placeholder}
    </button>
  )
}

export default index