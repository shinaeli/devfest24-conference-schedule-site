import React from 'react'
import { speakersTopics } from '../consts/speakers'
import { schedule } from '../consts/schedule';

const Schedule = () => {
  return (
    <div className='container'>
      <section className="speakers">
        <h1 className="dosis-bold">Speakers:</h1>
        {speakersTopics.map(item => {
          const { id, speaker, topic } = item;
          return (
            <div key={id}>
              <h3 className="dosis-semibold">{speaker}</h3>
              <p className="dosis-regular">{topic}</p>
            </div>
          );
        })}
      </section>
      <section className="schedule">
        <h1 className="dosis-bold">Schedule:</h1>
        <main className="day-1">
          {schedule.map(item => {
            const { id, day, topics } = item;
            return (
              <div key={id}>
                <h3 className="dosis-semibold">{day}</h3>
              {topics.map(item => {
                const { id, plan } = item;
                return <p className="dosis-regular" key={id}>{plan}</p>;
              })}
              </div>
            )
          })}
        </main>
        <h4 className="dosis-semibold">Please note that the schedule is subject to change. Stay tuned for updates!</h4>
      </section>
    </div>
  )
}

export default Schedule