import React from 'react'
import Heading from '../Fashion/Heading'
// import img
import img1 from '../../assets/img/team/team1.png'
import img2 from '../../assets/img/team/team2.png'
import img3 from '../../assets/img/team/team3.png'
import img4 from '../../assets/img/team/team4.png'

const TeamData =[
    {
        img:img1,
      
    },
    {
        img:img2,
    },
    {
        img:img3,
    },
    {
        img:img4,

    }
]

const Team = (props) => {
    return (
        <>
        <section id="team_area" className={`ptb-100 ${props.class}`} >
        <div className="container">
            <Heading heading="Workflows" para="Quality and style in every seam" />
            <div className="row">
                {TeamData.map((data, index)=>(
                    <div className="col-lg-3" key={index}>
                    <div className="team_slider">
                        <div className="team-single">
                            <div className="team-img">
                                <img src={data.img} alt="img" />
                            </div>
                            <div className="team-content">
                                <h4 className="team-name font--bold">{data.name}</h4>
                                <span className="team-title">{data.posation}</span>
                                <ul className="team-social pos-absolute">
                                    <li><a href="#!"><i className="fa fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.qoovee.com/en/osoo-adiku-grupp/"><i className="fa fa-google"></i></a></li>
                                    <li><a href="https://wa.me/996771163050"><i className="fa fa-whatsapp"></i></a></li>
                                    <li><a href="https://www.instagram.com/adiku.group.kg/"><i className="fa fa-instagram"></i></a></li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>  
        </>
    )
}

export default Team
