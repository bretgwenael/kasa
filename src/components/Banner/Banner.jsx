import banner1 from '../../assets/img_home.svg'
import "./banner.css";

function Banner() {
    return (
        <div className='banner'>
            <img src={banner1} alt="paysage rocher mer" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;