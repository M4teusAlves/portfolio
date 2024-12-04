
interface Props{
    imagem:string,
}

export function Project(props:Props){
    return(
        <article>
            <img src={props.imagem}/>
            <p></p>
            <p></p>
            
        </article>
    )
}