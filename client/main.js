import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, CalculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';



//Cuando el dom está listo se ejecutá esta función
Meteor.startup(() => {

  //traza si una collection ha sido actualizada si tenemos alguna query que la pide
  Tracker.autorun(() => {

    let players = Players.find({},{sort:{score: -1}}).fetch();
    let positionedPlayers = CalculatePlayerPositions(players);//procesamos la lista de players (cruda) añadiendo su posición (1st,2nd,3rd).
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));

  });


});
