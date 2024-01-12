
import Button from "./Button";
export default function CardForm({ func, cardInfo, setCardInfo }) {

    const handleChange = (e) => {
        const changedField = e.target.name;
        const newVal = e.target.value;
        setCardInfo((c) => {
          return {
            ...c,
            [changedField]: newVal,
          }
        })
      }
    return (
        <div className="CardForm">
            <form action="#" className="form" >
                <div className="form__group">
                    <label htmlFor="name" className="form__label form__label--name">
                        Cardholder Name
                    </label>
                    <input type="text" className="form__input form__input--name" name="name" placeholder="e.g. Jane Appleseed" value={cardInfo.name} onChange={handleChange} />
                </div>
                <div className="form__group">
                    <label htmlFor="number" className="form__label form__label--number">
                        Card Number
                    </label>
                    <input type="text" className="form__input form__input--number" name="number" placeholder="e.g. 1234 5678 9123 0000" maxLength={16} value={cardInfo.number} onChange={handleChange} />
                </div>
                <div className="form__group--row">
                    <div className="form__group">
                        <label htmlFor="exp-date" className="form__label form__label--exp-date">
                            Exp. Date (MM/YY)
                        </label>
                        <div className="form__group--exp">
                            <input type="text" className="form__input form__input--exp-date--mm" name="expM" placeholder="MM" minLength={2} maxLength={2} min={1} max={12} value={cardInfo.expM} onChange={handleChange} />
                            <input type="text" className="form__input form__input--exp-date--yy" name="expY" placeholder="YY" minLength={2} maxLength={2} min={2024} max={2030} value={cardInfo.expY} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="form__group">
                        <label htmlFor="cvc" className="form__label form__label--cvc">
                            CVC
                        </label>
                        <input type="text" className="form__input form__input--cvc" name="cvv" placeholder="e.g. 123" value={cardInfo.cvv} onChange={handleChange} />
                    </div>
                </div>
                <Button func={func}>Submit</Button>
            </form>
        </div>
    )
}