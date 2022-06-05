import card_a from "./images/card1.png"
import card_b from "./images/card2.png"
import card_c from "./images/card3.png"

export default function Api() {
    return (
        <div className="card--section mt-5">
            <div className="container justify-content-end d-md-flex">
                <div className="card me-3">
                    <img src={card_a} />
                    <div className="d-block">
                        <div className="card--stats">
                        <i className="fa-duotone fa-rocket-launch fa-shake"></i>
                        </div>
                    </div>
                </div>
                <div className="card me-3 c-t">
                    <img src={card_b} />
                </div>
                <div className="card me-3 c-t">
                    <img src={card_c} />
                </div>
            </div>
        </div>
    )
}