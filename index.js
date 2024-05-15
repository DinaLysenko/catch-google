import {GameResult} from "./component/game/game-result/GameResult.js";
import {GameGrid} from "./component/game/game-grid/GameGrid.js";
import {GAME_STATUS, getGameStatus, rerender, start} from "./data/data.js";
import {MissPoint} from "./component/game/game-result/MissPoint.js";
import {Settings} from "./component/settings/Settings.js";

function render(){
    let root=document.getElementById('root')
    root.innerHTML=''
    let gameStatus=getGameStatus()
    switch (gameStatus){
        case GAME_STATUS.GAME_SETTINGS: {
            root.append(Settings());
            break;
        }
        case GAME_STATUS.GAME_IN_PROGRESS: {
            root.append(GameResult(),MissPoint(), GameGrid());
            break;
        }
    }

}
render()
start()
rerender(render)