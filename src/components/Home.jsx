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
                    <div className='grid-element' style={{gridArea: 'box-1'}}><img className='grid-items' src={title}/></div>
                    <div className='grid-element' style={{gridArea: 'box-2'}}>lorum ipsum</div>
                    <div className='grid-element' style={{gridArea: 'box-3'}}>lorum ipsum</div>
                    <div className='grid-element' style={{gridArea: 'box-4'}}><button><span>▶</span> <span>Play</span></button></div>
                </div>
            </div>
    )
}
export default Home;