import { type CheckBox } from "services/types/UIComponent"

const CheckBox: React.FC<CheckBox> = ({inputClassName, labelClassName,...rest}) => {
    return(
        <div className={`flex items-center ` + rest.className}>
            <input
                id="checkBox"
                type="checkbox"
                name={rest.name}
                onClick={() => rest.setCheck(!!rest.checked)}
                className={inputClassName}
            />
            <label htmlFor="checkBox" className={labelClassName}>{rest.option}</label>
        </div>
    )
}

export default CheckBox;