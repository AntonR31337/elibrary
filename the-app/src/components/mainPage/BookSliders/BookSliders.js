import { images1 } from "../../../helpers/randomBooks";
import { images2 } from "../../../helpers/randomBooks";
import { images3 } from "../../../helpers/randomBooks";
import Slider from "./slider/Slider";



const BookSliders = () => {
    return (
        <section className="sliders">
            <h2 className="sliders__heading">
                Популярные произведения
            </h2>
            <div className="sliders__content">
                <Slider images={images1} category={" компьютеры"} />
                <Slider images={images2} category={" детективы"} />
                <Slider images={images3} category={" романы"} />
            </div>
        </section>
    )
}

export default BookSliders;