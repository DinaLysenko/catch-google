import { rerender} from "./data/data.js";
import {Game} from "./component/game/Game.js";

function render(){
    let root=document.getElementById('root')
    root.innerHTML=''
    let game=Game()
    root.append(game)
}
render()
rerender(render)