import React from 'react';
import {values} from 'lodash';
import { dateParser, sortData } from '../../helpers/records';

const RecordItem = (props) => {
  return (
    <div className="records-index-item">
      {sortData(values(props.data)).map(player => {
        return <div className="player-item" 
                    key={player.userId}>
          <div className={player.take > -1 ? 'positive' : 'negative'}>
            {player.take > -1 ? <i className="fa fa-money" aria-hidden="true"></i> : <i className="fa fa-fire" aria-hidden="true"></i>}
            <div className="player-take">{Math.abs(player.take)}</div>
          </div>
          <div className="player-name">{player.userName}</div>          
        </div>;
      })}
      <div className="game-date">{dateParser(props.date)}</div>
    </div>
  );
};

export default RecordItem;