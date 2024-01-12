import Button from "./Button"

export default function Completed({ func }) {
    return (
        <section className="Completed">
            <h2 className="Completed__header">
                Thank you!
            </h2>
            <p className="Completed__text">
                We've added your card details
            </p>
            <Button func={func}>Continue</Button>
        </section>

    )
}