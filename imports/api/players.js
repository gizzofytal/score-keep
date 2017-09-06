import {Mongo} from 'meteor/mongo'; //importamos los packages de mongo en meteor
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const CalculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    if(index !== 0 && players[index-1].score > player.score){
      rank++;
    }
    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    };
  });
}
