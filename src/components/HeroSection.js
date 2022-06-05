import hero_a from "./images/hero1.png"
import hero_b from "./images/hero2.png"
import hero_c from "./images/hero3.png"
import hero_d from "./images/hero4.png"
import hero_e from "./images/hero5.png"
import hero_f from "./images/hero6.png"
import hero_g from "./images/hero7.png"
import hero_h from "./images/hero8.png"
import hero_i from "./images/hero9.png"

export default function Hero() {
    return (
        <div>
        <div className="container d-flex justify-content-center">
            <div className="grid-container mt-5">
                <img className="item1" src={hero_a} />
                <img className="item2 mt-1" src={hero_b} />
                <img className="item3 mt-4" src={hero_d} />
                <img className="item4" src={hero_f} />
                <img className="item5" src={hero_h} />
                <img className="item6" src={hero_c} />
                <img className="item7" src={hero_e} />
                <img className="item8" src={hero_g} />
                <img className="item9" src={hero_i} />
            </div>
        </div>
            <section className="ms-5 mt-5">
            <h1>Online Experiences</h1>
            <p className="grey">Join unique interactive activities led by <br />
            one-of-a-kind hosts-all without leaving <br />
            home.</p>
            </section>
        </div>
    )
}