import {GameResult} from "./component/game-result/GameResult.js";
import {GameGrid} from "./component/game-grid/GameGrid.js";


let root=document.getElementById('root')
root.append(GameResult(), GameGrid())