import "./Board.css";
import Tile from '../Tile/Tile';
import React, { useRef, useState } from 'react';
import Rules from '../Rules/Rules';
import { letterAxis, numberAxis, Piece, PieceType } from '../../constants';

const NUMBER = 8;   
const initialBoardState: Piece[] = [];

//              ALLY PAWNS

for(let i:number = 0; i < NUMBER; i+=2) {
    initialBoardState.push({image: './assets/ally-pawn.png', x: i, y: 2, state: 1 ,type: PieceType.ALLY, setState(value) { this.state = value }})
}

for(let i:number = 1; i < NUMBER; i+=2) {
    initialBoardState.push({image: './assets/ally-pawn.png', x: i, y: 1,state: 1 , type: PieceType.ALLY, setState(value) { this.state = value }})
}

for(let i:number = 0; i < NUMBER; i+=2) {
    initialBoardState.push({image: './assets/ally-pawn.png', x: i, y: 0, state: 1 , type: PieceType.ALLY, setState(value) { this.state = value }})
}

//              ENEMY PAWNS

for(let i:number = 1; i < NUMBER; i+=2) {
    initialBoardState.push({image: './assets/enemy-pawn.png', x: i, y: 7, state: 1 ,type: PieceType.ENEMY, setState(value) { this.state = value }})
}

for(let i:number = 0; i < NUMBER; i+=2) {
    initialBoardState.push({image: './assets/enemy-pawn.png', x: i, y: 6, state: 1 ,type: PieceType.ENEMY, setState(value) { this.state = value }})
}

for(let i:number = 1; i < NUMBER; i+=2) {
    initialBoardState.push({image: './assets/enemy-pawn.png', x: i, y: 5, state: 1 ,type: PieceType.ENEMY, setState(value) { this.state = value } })
}

export default function Board() {
    const rules = new Rules();
    const board = [];
    let dropTarget = null;
    const [activePiece, setActivePiece] = useState<HTMLElement | null>(null)
    const [gridX, setGridX] = useState(0);
    const [gridY, setGridY] = useState(0);
    const boardRef = useRef<HTMLDivElement>(null);
    const [pieces, setPieces] = useState<Piece[]>(initialBoardState)

    for(let i = numberAxis.length - 1; i >= 0; i--) {
        for(let j = 0; j < letterAxis.length; j++) {
            let image = undefined;
            const number = j + i;
            let empty = true;

            pieces.forEach(piece => {
                if(piece.x === j && piece.y === i && piece.state !== 0) {
                    image = piece.image;
                    empty = false;
                }
            });
            board.push( <Tile key={`${j}, ${i}`} image={image} number={number} empty={empty} /> )
        }
    }

    function grabPawn(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const board = boardRef.current;
        const target = e.target as HTMLElement;
        if(target.classList.contains('piece') && board) {
            setGridX(Math.floor((e.clientX - board.offsetLeft) / 100));
            setGridY(Math.abs(Math.ceil((e.clientY - board.offsetTop - 800)  / 100)));
            const x = e.clientX - 50;
            const y = e.clientY - 50;
            target.style.position = "absolute";
            target.style.left = `${x}px`;
            target.style.top = `${y}px`;
            target.style.pointerEvents = 'none';
            setActivePiece(target);
        }
    }
        
    function dropPawn(e: React.MouseEvent) {
        const board = boardRef.current;
        //TODO: CONTROLLO SE CONTIENE CLASSE PIECE O TILE ED ESEGUI ISTRUZIONI
        if(activePiece && board) { 
            console.log(e.clientX - board.offsetLeft, e.clientY - board.offsetTop);
            const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
            console.log(target)
            const x = Math.floor((e.clientX - board.offsetLeft) / 100);
            const y = Math.abs(Math.ceil((e.clientY - board.offsetTop - 800)  / 100)); //-800 per invertire l'asse y
            
            setPieces((value) => {
                const newPieces = value.map(p => {
                    if(p.x === gridX && p.y === gridY) {
                        if(rules.moveIsValid(gridX, gridY, x, y, p.type, value, target)) {
                            p.x = x;
                            p.y = y;
                        } else {
                            activePiece.style.position = 'relative';
                            activePiece.style.removeProperty('top');
                            activePiece.style.removeProperty('left');
                            activePiece.style.pointerEvents = 'all';
                        }
                    } 
                    return p;
                });
                return newPieces;
            });
            setActivePiece(null);
        }
    }
    
    function movePawn(e: React.MouseEvent) {
        const board = boardRef.current;
        if(activePiece && board) {
            const minX = board.offsetLeft - 25;
            const minY = board.offsetTop - 25;
            const maxX = board.offsetLeft + board.clientWidth - 75;
            const maxY = board.clientHeight + board.offsetTop - 75;
            const x = e.clientX - 25;
            const y = e.clientY - 25;

            if(x < minX) {
                activePiece.style.left = `${minX}px`;
            } else if (x > maxX) {
                activePiece.style.left = `${maxX}px`;
            } else {
                activePiece.style.left = `${x}px`;
            }

            if (y < minY) {
                activePiece.style.top = `${minY}px`;
            }
                else if (y > maxY) {
                activePiece.style.top = `${maxY}px`;
            }
            else {
                activePiece.style.top = `${y}px`;
            }
        }
    }

    return(
        <div 
        onMouseUp={(e) => dropPawn(e)}
        onMouseMove={(e) => movePawn(e)} 
        onMouseDown={(e) => grabPawn(e)} className='board'
        ref={boardRef}>
            {board}
        </div>
    );
}