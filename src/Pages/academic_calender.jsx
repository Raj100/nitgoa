import './academic_calender.css';
import line from '../images/Line.png';
import card_img from '../images/Rectangle 41.png';


const academic_calender = () => {
    return(
 
    <div class="page">
        <div class="title">
            <h1>Academic Calender - 2024</h1>
            <img src={line} alt="line image" />
        </div>
        <div class="items">
            <div class="card">
                <img src={card_img} alt="" />
                <div class="info">
                    <div class="year">
                        <h4>Even Semester</h4>
                        <h5>2023-24</h5>
                    </div>
                    <div class="batch">
                        <h5>B.Tech | M.Tech | Ph.D</h5>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src={card_img} alt="" />
                <div class="info">
                    <div class="year">
                        <h4>Even Semester</h4>
                        <h5>2023-24</h5>
                    </div>
                    <div class="batch">
                        <h5>B.Tech | M.Tech | Ph.D</h5>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src={card_img} alt="" />
                <div class="info">
                    <div class="year">
                        <h4>Even Semester</h4>
                        <h5>2023-24</h5>
                    </div>
                    <div class="batch">
                        <h5>B.Tech | M.Tech | Ph.D</h5>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default academic_calender;
