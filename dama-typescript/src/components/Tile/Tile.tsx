import './Tile.css';


interface Props {
    image?: string;
    number: number;
}

//TODO IMPROVE PIECES RENDER 

export default function Tile({ number, image }: Props) {
    if(number % 2 == 0) {
        return (
            <div className='tile black' >
                {image && <div className='piece' style={{backgroundImage: `url(${image})`}}></div>}
            </div>
        )
    } 

    return (
        <div className='tile white'></div>
    )
}

