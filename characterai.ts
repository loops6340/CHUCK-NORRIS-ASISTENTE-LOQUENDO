const CharacterAI = require('node_characterai');
import { from } from 'rxjs';
import { shareReplay } from 'rxjs/operators';



const characterAI = new CharacterAI();
const characterId = "Y3vD3EcvMrVfTX1nqX1fqi_M5oQpIbBXaGxfHP5q-ZU"
    
export const chat$ = from(
  characterAI.authenticateWithToken(process.env.API_KEY)
    .then(() => {
      console.log("HOLA!")
      return characterAI.createOrContinueChat(characterId) 
    })
).pipe(
  shareReplay(1)
);