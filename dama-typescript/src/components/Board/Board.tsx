import "./Board.css";
import Tile from '../Tile/Tile';
import React, { useRef, useState } from 'react';
import Rules from '../Rules/Rules';
import * as CONSTANTS from '../../constants';   
import * as INTERFACES from '../../Interfaces'

let turn = true;
let GAME_ENDED = false;

export default function Board() {
    const rules = new Rules();
    const gameBoard = [];
    const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
    const [grabPosition, setGrabPosition] = useState<INTERFACES.Position>({ x: -1, y: -1 })
    const gameBoardRef = useRef<HTMLDivElement>(null);
    const [pieces, setPieces] = useState<INTERFACES.Piece[]>(CONSTANTS.initialBoardState)

    for(let i = CONSTANTS.HORIZONTAL_AXIS.length - 1; i >= 0; i--) {
        for(let j = 0; j < CONSTANTS.VERTICAL_AXIS.length; j++) {
            const SumOfAxis = j + i;
            if(SumOfAxis % 2 == 0) {
                const piece = pieces.find(piecesIterator => piecesIterator && piecesIterator.position.x === j && piecesIterator.position.y === i);
                if(piece?.position.y === CONSTANTS.ENEMY_PROMOTION_ROW && piece.type == INTERFACES.PieceType.ENEMY && piece.state != CONSTANTS.DAMA_STATE) {
                    piece.setState(CONSTANTS.DAMA_STATE);
                    piece.setImage(CONSTANTS.ENEMY_DAMA_DIRECTORY);
                } else if(piece?.position.y === CONSTANTS.ALLY_PROMOTION_ROW && piece.type == INTERFACES.PieceType.ALLY && piece.state != CONSTANTS.DAMA_STATE) {
                    piece.setState(CONSTANTS.DAMA_STATE);
                    piece.setImage(CONSTANTS.ALLY_DAMA_DIRECTORY);
                }
                let image = piece ? piece.image : undefined;
                gameBoard.push( <Tile key={`${j}, ${i}`} image={image} number={SumOfAxis} /> )
            } else {
                gameBoard.push( <Tile key={`${j}, ${i}`} number={SumOfAxis} /> )
            }
            
        }
    }
        
    const turno = document.querySelector('.turn');
    if(!GAME_ENDED) {
        if(turn && turno) {
            turno.innerHTML = 'RED';
        } else if(!turn && turno) {
            turno.innerHTML = 'BLUE';
        } 
    }


    function grabPawn(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const gameBoard = gameBoardRef.current;
        const target = event.target as HTMLElement;
        if(target.classList.contains('piece') && gameBoard && !GAME_ENDED) {
            const grabX = Math.floor((event.clientX - gameBoard.offsetLeft) / CONSTANTS.GRID_SIZE);
            const grabY = Math.abs(Math.ceil((event.clientY - gameBoard.offsetTop - CONSTANTS.BOARD_SIZE)  / CONSTANTS.GRID_SIZE));

            const piece = pieces.find(piecesIterator => piecesIterator.position.x === grabX && piecesIterator.position.y === grabY);
            
            const x = event.clientX - CONSTANTS.GRID_SIZE / 2;
            const y = event.clientY - CONSTANTS.GRID_SIZE / 2;
            let movePawn: HTMLElement | null = null;
        
            if(turn && piece?.type == INTERFACES.PieceType.ALLY) {
                movePawn= target;
            }

            if(!turn && piece?.type == INTERFACES.PieceType.ENEMY) {
                movePawn= target;
            }
            if(movePawn) {
               setGrabPosition({ 
                    x: grabX, 
                    y: grabY
                });

                movePawn.style.position = "absolute";
                movePawn.style.left = `${x}px`;
                movePawn.style.top = `${y}px`;
                movePawn.style.pointerEvents = 'none';
                setActivePiece(movePawn); 
            }
            
        }
    }
        
    function dropPawn(event: React.MouseEvent) {
        const gameBoard = gameBoardRef.current;
        if(activePiece && gameBoard) { 
            const target = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement;

            const mouseX = Math.floor((event.clientX - gameBoard.offsetLeft) / CONSTANTS.GRID_SIZE);
            const mouseY = Math.abs(Math.ceil((event.clientY - gameBoard.offsetTop - CONSTANTS.BOARD_SIZE)  / CONSTANTS.GRID_SIZE)); 
            const mousePosition: INTERFACES.Position = {x: mouseX, y: mouseY};

            setPieces((value) => {
                const newPieces = value.map(piecesIterator => {
                    if(CONSTANTS.isSamePosition(piecesIterator.position, grabPosition)) {
                        if(rules.moveIsValid(grabPosition, mousePosition, piecesIterator.type, piecesIterator, value, target)) {
                            piecesIterator.position.x = mouseX;
                            piecesIterator.position.y = mouseY;
                            
                            turn = !turn;
                            if(value.length <= 13) {
                                const totalAllyPieces: INTERFACES.Piece[] = [];
                                const totalEnemyPieces: INTERFACES.Piece[] = [];
                                value.forEach(() => {
                                    totalAllyPieces.push(value.find(p => p.type == 1) as unknown as INTERFACES.Piece);
                                    totalEnemyPieces.push(value.find(p => p.type == -1) as unknown as INTERFACES.Piece);
                                });

                                if(turno && totalAllyPieces.length == 0) {
                                    turno.innerHTML = 'BLUE WON';
                                    GAME_ENDED = true;
                                }
                                if(turno && totalEnemyPieces.length == 0) {
                                    turno.innerHTML = 'RED WON';
                                    GAME_ENDED = true;
                                }
                            }
                        } else {
                            activePiece.style.position = 'relative';
                            activePiece.style.removeProperty('top');
                            activePiece.style.removeProperty('left');
                            activePiece.style.pointerEvents = 'all';
                        }
                    } 
                    return piecesIterator;
                });
                return newPieces;
            });
            setActivePiece(null);
        }
    }
    
    function movePawn(event: React.MouseEvent) {
        const gameBoard = gameBoardRef.current;
        if(activePiece && gameBoard) {
            const minX = gameBoard.offsetLeft - CONSTANTS.OFFSET_ADJUST;
            const minY = gameBoard.offsetTop - CONSTANTS.OFFSET_ADJUST;
            const maxX = gameBoard.offsetLeft + gameBoard.clientWidth - CONSTANTS.BOARD_ADJUST;
            const maxY = gameBoard.clientHeight + gameBoard.offsetTop - CONSTANTS.BOARD_ADJUST;
            const x = event.clientX - CONSTANTS.OFFSET_ADJUST;
            const y = event.clientY - CONSTANTS.OFFSET_ADJUST;

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
        onMouseUp={(event) => dropPawn(event)}
        onMouseMove={(event) => movePawn(event)} 
        onMouseDown={(event) => grabPawn(event)} className='board'
        ref={gameBoardRef}> {gameBoard} </div>
    );

}