export default function HoverEffect({count,hoverCount,theme}) {

    let style = null;
    if(theme === 'dark')
    {
        style =  {backgroundColor:'#000000',color:'ffffff'} 
    }
    else if( theme === 'white' ) style = {backgroundColor:'#ffffff',color:'#000000'};
    return(
        <div>
            <h3 style={style} onMouseOver={hoverCount} >Hover me Please ! {count}</h3>
        </div>
    );
}