import './departments.css'


const Departments = () => {
  return (
    <div className="page">
  <h2>Departments</h2>
  <hr className="underline" />
  <div className="departments">
    <div className="card">
      <div className="circle">CSE</div>
      <hr className="crossline" />
      <p>Computer Science &amp;
        Enginnering</p>
    </div>
    <div className="card">
      <div className="circle">CVE</div>
      <hr className="crossline" />
      <p>Civil Engineering</p>
    </div>
    <div className="card">
      <div className="circle">MCE</div>
      <hr className="crossline" />
      <p>Mechanical Engineering</p>
    </div>
    <div className="card">
      <div className="circle">EEE</div>
      <hr className="crossline" />
      <p>Electrical and 
        Electronics Engineering</p>
    </div>
    <div className="card">
      <div className="circle">ECE</div>
      <hr className="crossline" />
      <p>Electronics and Communication Engineering</p>
    </div>
    <div className="card">
      <div className="circle">HS</div>
      <hr className="crossline" />
      <p>Humanities and 
        Social Sciences</p>
    </div>
    <div className="card">
      <div className="circle">AS</div>
      <hr className="crossline" />
      <p>Applied Sciences</p>
    </div>
  </div>
</div>


  );
};

export default Departments;