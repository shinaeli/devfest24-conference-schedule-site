import React from 'react'
import { foodsInfo } from '../consts/foods'

const FoodInfo = () => {
  return (
    <div className='container'>
        <section className="food-options">
                <h1 className="dosis-bold">Food Options at DevFest24:</h1>
                <p className="dosis-regular">At DevFest 24, we understand the importance of providing nourishing and diverse food options to keep our attendees energized and focused throughout the event. We are committed to catering to various dietary preferences and ensuring a delightful culinary experience for all participants. Here's a detailed overview of the food options available:</p>
                <section className="foods-main">
                  {foodsInfo.map(item => {
                    const { id, foodClass, info } = item;
                    return (
                      <div key={id}>
                        <h3  className="dosis-semibold">{foodClass}</h3>
                        {
                          info.map((item, index) => <p className="dosis-regular" key={index}>{item}</p>)
                        }
                      </div>
                    )
                  })}
                </section>
        </section>
    </div>
  )
}

export default FoodInfo