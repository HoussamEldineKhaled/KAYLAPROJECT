import './Open.css'
import title from './assets/kas-extras-wordmark.png'
import vid from './assets/stars.mp4'
function Open(){
    return(
        <div className='principle-background'>
        <video className='back-video' autoPlay loop muted playsInline>
            <source src={vid} type='video/mp4'></source>
        </video>
            <div className="intro-frame">
                
                    <div className='grid-element' style={{gridArea: 'box-1'}}>
                    <button className='logo-button'><img className='grid-items' src={title}/></button>
                    </div>
                    <div className='grid-element' style={{gridArea: 'box-2'}}>
                        <h1 className='instruction'>Click the Logo to Begin</h1>
                    </div>
                    
                
            </div>
            
        </div>
    )
}
export default Open;