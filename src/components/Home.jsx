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
                    <div className='grid-element' style={{gridArea: 'box-1'}}>
                    <button className='logo-button'><img className='grid-items' src={title}/></button>
                    <span className='under-logo'><span className='red-dot'></span> <span><h5>VHS DECK MEETS EDITING TIMELINE</h5></span></span>
                    </div>
                    <div className='grid-element' style={{gridArea: 'box-2'}}>
                        <h1 className='instruction'>Click the Logo to Begin</h1>
                        <p className='description'>A late-night post-production portfolio for Kayla Slocumb — editor, sound designer, and colorist.</p>
                    </div>
                    <div className='grid-element' style={{gridArea: 'box-3'}}>
                        <div className='vhs-deck'>
                            <div className='deck-screen'>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}
export default Home;