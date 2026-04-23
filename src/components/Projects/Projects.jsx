import "./projects.css"

import mediaImg from '../../assets/media.jpg'

import drsahab from '../../assets/drsahab.jpeg'
import educationImg from '../../assets/education.jpg'
import rajImg from '../../assets/resturant.jpg'
import { Link } from "react-router-dom"
import MirchiImg from "../../assets/mirchi.jpg"
import payment from '../../assets/payment.jpg'
const Projects = () => {
    return (
        <section className="project_wrapper pt-5 pb-5" id="project_section">
            <div className="container">
                <div className='text-center wow animate__animated animate__slow 3s  animate__zoomIn'>
                    <h2 className='text-center mb-3'>Projects</h2>
                    <div className="bar"></div>
                </div>
                <div className="project_row">
                    <div className="row g-4 justify-content-center wow animate__animated animate__slow 3s  animate__zoomInLeft">
                        <div className="col-lg-4 col-md-6">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={mediaImg} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>The Salon</h3>
                                        <p className="my-para"> you are new to the social media world for businesses and are confused about what to post then read ahead. We have curated the perfect list of inspirational, entertaining and educational content ideas.
                                        </p>
                                        <Link to='https://wowlooks-138bb.web.app' target="__blank" className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={drsahab} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>Dr.Sahab</h3>
                                        <p className="my-para">Doctor Sahab is a medical practice management software that helps in the efficient management of a clinic. This platform comes with the
                                            best-in-class features, which help users.</p>
                                        <Link to='https://doctorwebsite.vercel.app' target="__blank" className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={payment} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>College Skills</h3>
                                        <p className="my-para">I create this Web Application using the best and most popular javaScript Liblary React js And for the Managing the data i used React hooks.</p>
                                        <Link to='https://collegeskill.com' target="__blank" className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={educationImg} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>E Education App</h3>
                                        <p className="my-para">E-learning mobile apps take content delivery to the next level with interactive sessions between teachers and students
                                            wherein they can communicate and share their opinions Students can ask questions and teachers.</p>
                                        <Link to='https://education-psi.vercel.app' target="__blank"className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={rajImg} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>IT setUp Web </h3>
                                        <p className="my-para">When it comes to building websites, content is a necessity! Without content, your website is like a blank piece of paper or an empty toolbox – there is nothing to help or equip your visitors. The challenge is often putting together.</p>
                                        <Link to='https://itsetuptheme.vercel.app' target="__blank" className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 ">
                            <div className="demo">
                                <figure className="imghvr-zoom-out-flip-horiz rounded"><img src={MirchiImg} alt="example-image" className="img-fuild" />
                                    <figcaption className="text-center">
                                        <h3>Green Phase Charging Vehicle</h3>
                                        <p className="my-para">I create this webside using the most react js famous framework Next js and use useState for the managing the data in this application.</p>
                                        <Link to='https://greenphase.in' target="__blank"className="show-projectbtn">Show Project</Link>
                                    </figcaption>

                                </figure>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
