import React from 'react'
import Slider from 'react-slick';

const SliderCompenent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>

        <Slider {...settings}>
          <div className='!flex items-center bg-[#f6f6f6] px-6'>
            <div>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                <div className='text-lg my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto expedita nostrum, ducimus dolore quasi, porro, doloribus eveniet earum optio assumenda odio enim illo distinctio ad. Earum facere odit ullam.</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-14  flex items-center justify-center bg-green-400 shadow mt-5 text-white'>İncele</div>
            </div>
            <img className='w-[30%] h object-contain ' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9022903b-ed99-4f2d-a441-58eb7c19a66c/pegasus-39-shield-hava-%C5%9Fartlar%C4%B1na-dayan%C4%B1kl%C4%B1-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-Fp3SPv.png" alt="" />
          </div>

          <div className='!flex items-center bg-[#f6f6f6] px-6'>
             <div>
                <div className='text-6xl font-bold'>Kalite Burada</div>
                <div className='text-lg my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto expedita nostrum, ducimus dolore quasi, porro, doloribus eveniet earum optio assumenda odio enim illo distinctio ad. Earum facere odit ullam.</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-14  flex items-center justify-center bg-green-400 shadow mt-5'>İncele</div>
             </div>
             <img className='w-[30%] h object-contain ' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/313be351-7e1b-4dbd-a430-0bc4fe380351/pegasus-trail-4-gore-tex-su-ge%C3%A7irmez-arazi-tipi-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-DmGWgX.png" alt="" />
          </div>
          </Slider>
    </div>
  )
}

export default SliderCompenent