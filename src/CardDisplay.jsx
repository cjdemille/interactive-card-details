export default function CardDisplay({ cardInfo }) {
    return (
        <div className="CardDisplay">
            <section className="cards">
                <section className="card card-front">
                    <div className="card-front__circle-group">
                        <div className="card-front__circle--white card-front__circle">&nbsp;</div>
                        <div className="card-front__circle--hollow card-front__circle">&nbsp;</div>
                    </div>
                   
                    <div className="card-front__content">
                        <span className="card-front__number">
                            {`${cardInfo.number}`}
                        </span>
                        <div className="card-front__name-and-date">
                            <span className="card-front__name">
                                {cardInfo.name}
                            </span>
                            <span className="card-front__date">
                                {cardInfo.expM}/  {cardInfo.expY}
                            </span>
                        </div>

                    </div>

                </section>
                <section className="card card-back">
                    <span className="card-back__cv">
                        {cardInfo.cvv}
                    </span>
                </section>
            </section>

        </div>
    )
}