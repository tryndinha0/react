import profilePic from "./assets/chuu.png"

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="" className="card-image"/>
            <h2 className="card-title">Bro code</h2>
            <p className="card-text">Eu estudooo e sou proplayer de games</p>
        </div>
    );
}

export default Card