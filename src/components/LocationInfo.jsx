import React from 'react'

const LocationInfo = () => {
  return (
    <div className='container'>
        <section className="location">
          <h1 className='dosis-bold'>Location:</h1>
          <p className='dosis-semibold'>TechHub Convention Center</p>
        </section>
        <section className="address">
          <h3 className='dosis-semibold'>Address:</h3>
          <p className='dosis-regular'>123 Innovation Avenue</p>
          <p className='dosis-regular'>Silicon Valley, CA 95014</p>
        </section>
        <section className="location-description">
          <h3 className='dosis-semibold'>Description:</h3>
          <p className='dosis-regular'>The TechHub Convention Center is a state-of-the-art facility located in the heart of Silicon Valley, the epicenter of technology innovation. Situated amidst the bustling tech community, the convention center offers a dynamic and inspiring environment for hosting events like DevFest 24.</p>
        </section>
        <section className="location-features">
          <h3 className='dosis-semibold'>Features:</h3>
          <h3 className='dosis-semibold'>Spacious Conference Halls:</h3>
          <p className='dosis-regular'>The convention center boasts multiple spacious conference halls equipped with advanced audiovisual technology, perfect for keynote speeches, panel discussions, and workshops.</p>
          <h3 className='dosis-semibold'>Exhibition Area:</h3>
          <p className='dosis-regular'>A dedicated exhibition area provides space for tech companies, startups, and sponsors to showcase their latest products, services, and innovations. Attendees have the opportunity to network with industry leaders, explore new technologies, and discover exciting opportunities.</p>
          <h3 className='dosis-semibold'>Networking Lounges:</h3>
          <p className='dosis-regular'>Throughout the venue, there are designated networking lounges where attendees can connect with peers, exchange ideas, and forge valuable professional relationships. These lounges offer comfortable seating, refreshments, and a conducive environment for informal discussions.</p>
          <h3 className='dosis-semibold'>TechHub Hotel:</h3>
          <p className='dosis-regular'>Adjacent to the convention center is the TechHub Hotel, offering convenient accommodation options for event attendees. The hotel features modern amenities, spacious rooms, and easy access to the conference venue, making it an ideal choice for out-of-town guests.</p>
          <h3 className='dosis-semibold'>Accessibilty:</h3>
          <p className='dosis-regular'>The TechHub Convention Center is easily accessible by car, public transportation, and shuttle services. Ample parking facilities are available on-site for those traveling by car, while nearby public transportation options provide convenient access for attendees coming from various locations.</p>
          <h3 className='dosis-semibold'>Surrounding Area:</h3>
          <p className='dosis-regular'>Silicon Valley is renowned as the global hub of technology and innovation, home to numerous tech giants, startups, research institutions, and venture capital firms. Surrounding the convention center are vibrant neighborhoods, bustling with entrepreneurial energy, world-class dining options, and cultural attractions. Attendees can explore nearby landmarks such as the Computer History Museum, Googleplex, and Stanford University campus during their visit to Silicon Valley.</p>
          <p className='dosis-regular'>With its strategic location, modern amenities, and vibrant surroundings, the TechHub Convention Center provides the perfect setting for DevFest 24, bringing together developers, tech enthusiasts, and industry leaders for a transformative and inspiring event.</p>
        </section>
    </div>
  )
}

export default LocationInfo