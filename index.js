import {EVENTS, rerender} from "./data/data.js";
import {Game} from "./component/game/Game.js";

function render(e){
    if(e.name===EVENTS.GAME_STATUS_CHANGED){
        console.log("rerender")
        let root=document.getElementById('root')
        root.innerHTML=''
        let game=Game()
        root.append(game)
    }

}
render({name:EVENTS.GAME_STATUS_CHANGED})

rerender(render)
const subscriber=(e)=>{
    console.log(e)
}
rerender(subscriber)


