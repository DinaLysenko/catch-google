import {rerender, unSubscribe} from "./data/data.js";
import {Game} from "./component/game/Game.js";

function render(e){
    console.log("rerender")
    let root=document.getElementById('root')
    root.innerHTML=''
    let game=Game()
    root.append(game)
}
render({name:undefined})

rerender(render)


