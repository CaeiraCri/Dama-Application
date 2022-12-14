import './Tile.css';

interface Props {
    image?: string;
    number: number;
    empty: Boolean;
}

export default function Tile({ number, image, empty }: Props) {
    if(number % 2 == 0) {
        return (
        <div className='tile black' data-empty={empty} >
            {image && <div className='piece' style={{backgroundImage: `url(${image})`}}></div>}
        </div>)
    } 
    return <div className='tile white' data-empty={empty}>
                {image && <div className='piece' style={{backgroundImage: `url(${image})`}}></div>}
            </div> 
}

