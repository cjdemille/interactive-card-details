export default function Button({ children, func }) {
    return (
        <button className="Button" onClick={func}>
            {children}
        </button>
    )
}