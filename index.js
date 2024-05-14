import {GameResult} from "./component/game-result/GameResult.js";
import {GameGrid} from "./component/game-grid/GameGrid.js";
import {rerender, start} from "./data/data.js";
import {MissPoint} from "./component/game-result/MissPoint.js";

function render(){
    let root=document.getElementById('root')
    root.innerHTML=''
    root.append(GameResult(),MissPoint(), GameGrid())
}
render()
start()
rerender(render)