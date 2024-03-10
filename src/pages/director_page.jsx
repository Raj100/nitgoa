import React from 'react';
import './director.css';
import director_img from '../images/Icon-user 1.png';


const DirectorPage = () => {
    return (
        <div className="page">
            <div className="image">
                <img src={director_img} alt="Director" />
            </div>
            <div className="name">
                <h2>Prof. O. R. Jaiswal</h2>
            </div>
            <div className="pos">
                <h4>Director, NIT Goa</h4>
            </div>
            <div className="contact">
                <h5> Phone : +91-0832-2404200  |  E-mail : director@nitgoa.ac.in </h5>
            </div>
            <div className="info">
                Prof. O. R. Jaiswal, took over the charge as Director of NIT Goa on 8th June 2023.
                He is on deputation from the Visvesvaraya National Institute of Technology (VNIT),
                Nagpur, wherein, he is a Professor at the Department of Applied Mechanics.
                His basic field is Structural Engineering with research work in the areas related
                to earthquake analysis of structures, tuned mass dampers for seismic and wind response control,
                Dynamic response of Railway Tracks etc.He had graduated in Civil Engineering from
                Visvesvaraya Regional Engineering College (VRCE), Nagpur (Now, VNIT) in 1987;
                completed his Masters in 1991 and Doctoral degree in 1995 from the Indian Institute of Science,
                Bangalore. Subsequently, he was a post-doctoral fellow at the University of Liverpool
                for a period of about two years.He joined as faculty at VRCE in 1998. After becoming Professor in 2008, he
                was Head of the Department from 2010 to 2012 and then Dean (Academics) from 2013 to 2016. During his
                deanship, VNIT Nagpur had initiated the Student Mentor Program (SMP), wherein, first year UG students were
                mentored by third year students. This SMP is very effective in handling the anxiety and curiosity of new
                entrants at early stage.

                Professor Jaiswal, has coordinated funded R&D projects from MHRD, DST, CSIR and World Bank. In a
                collaborative project with IIT Kanpur, he developed Guidelines for Seismic Design of Liquid Storage Tanks.
                He is a member of BIS committees for earthquake and wind codes. He has supervised seven Ph.D. students. He
                has more than eighty scholarly papers to his credit.
            </div>
        </div>
    );
}



export default DirectorPage;
