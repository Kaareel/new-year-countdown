import './index.css'
const TimeDisplay = ({text, value}) => {
    return (
        <div className="TimeDisplay__value">
            <p className="TimeDisplay__text">{value}</p>
            <span>{text}</span>
        </div>
    )
}

export default TimeDisplay