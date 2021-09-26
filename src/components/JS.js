function JS({topic})
{
    let str;
    console.log(topic);
    switch(topic)
    {
        case 'Angular' :
        str = ' ** My first framework is - '+topic;
        break;
        case 'Vue' : 
        str = " ** My Second framework and most loved - "+topic;
        break;
        case 'React':
        str = ' ** Learning it - '+topic;
        break;
        case 'Node':
        str = ' ** Will learn - '+topic;
        break;
        default:
        str = ' ** Will learn everything of JS';
        break;
    }
    return (
        <span>{str}</span>
    )
}

export default JS