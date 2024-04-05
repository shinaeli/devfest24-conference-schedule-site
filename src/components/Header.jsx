import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container">
        <main>
            <section className="event-name">
                <h3 className="dosis-bold brand">DevFest24</h3>
                <p className="dosis-regular">DevFest 2024 is a premier gathering of developers, engineers, and tech enthusiasts from around the globe. This event provides a platform for networking, learning, and collaboration on the latest trends and innovations in software development, web development, artificial intelligence, and more. With a lineup of renowned speakers, hands-on workshops, and engaging panels, DevFest 2024 promises to inspire and empower developers at every level.</p>
            </section>
            <section className="event-date">
                <h3 className="dosis-semibold">Date:</h3>
                <p className="dosis-regular">June 10-12, 2024.</p>
            </section>
            <section className="hotel-options">
                <h3 className="dosis-semibold">Accomodations:</h3>
                <ol type="1">
                    <li>
                        <p className="dosis-regular">TechHub Hotel (Located adjacent to the convention center)</p>
                        <p className="dosis-regular">Address: 456 Tech Drive, Silicon Valley, CA 95014</p>
                        <p className="dosis-regular">Phone: (555) 123-4567</p>
                    </li>
                    <li>
                        <p className="dosis-regular">Silicon Suites</p>
                        <p className="dosis-regular">Address: 789 Innovation Boulevard, Silicon Valley, CA 95014</p>
                        <p className="dosis-regular">Phone: (555) 987-6543</p>
                    </li>
                    <li>
                        <p className="dosis-regular">Valley View Inn</p>
                        <p className="dosis-regular">Address: 101 Developer Street, Silicon Valley, CA 95014</p>
                        <p className="dosis-regular">Phone: (555) 789-0123</p>
                    </li>
                </ol>
            </section>
            <section className="code-of-conduct">
                <h3 className="dosis-semibold">Code of Conduct:</h3>
                <p className="dosis-regular">DevFest 2024 is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, ethnicity, age, religion, or technical skill level. We do not tolerate harassment of conference participants in any form.</p>
                <p className="dosis-regular">Harassment includes offensive verbal comments related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, ethnicity, age, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p>
                <p className="dosis-regular">Participants asked to stop any harassing behavior are expected to comply immediately.</p>
                <p className="dosis-regular">If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.</p>
                <p className="dosis-regular">If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately.</p>
                <p className="dosis-regular">We expect participants to follow these rules at all conference venues and conference-related social events.</p>
                <p className="dosis-regular">Thank you for helping to make this a welcoming, friendly event for all.</p>
            </section>
        </main>
        <Link className='dosis-semibold buy-ticket' to="/ticket">Buy A Ticket</Link>
    </div>
  )
}

export default Header