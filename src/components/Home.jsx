import './Home.css'
import title from './assets/kas-extras-wordmark.png'
function Home(){
    return(
            <div className="intro-frame">
                <div className="intro-topbar">
                    <span className='rec-section'><span className='red-dot'></span> <span><p>REC . KAS_EXTRAS_SETUP</p></span></span>
                    
                    <span>00:00:00:01</span>
                </div>
                <div className="intro-content">
                    <img src={title}/>
                </div>
            </div>
    )
}
export default Home;