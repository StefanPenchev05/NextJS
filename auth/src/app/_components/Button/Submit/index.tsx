import style from './style.module.css'
import { type SubmitButton } from 'services/types/UIComponent'

const SubmitButton: React.FC<SubmitButton> = ({...rest}) => {
  return (
    <button type='submit' className={`${style.submitButton} ${rest.className}`}>
        {rest.placeholder}
    </button>
  )
}

export default SubmitButton