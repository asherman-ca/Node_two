import React from 'react';
import RecordItem from './RecordItem';
import { values } from 'lodash';

const testData = {
  110417: {
    1: { userName: 'Alex', userId: 1, take: -40 },
    2: { userName: 'Raymond', userId: 2, take: 80 },
    3: { userName: 'Matt', userId: 3, take: -40 },
    4: { userName: 'David', userId: 4, take: 80 },
    5: { userName: 'Carson', userId: 5, take: -40 }
  },
  102817: {
    1: { userName: 'Alex', userId: 1, take: -40 },
    2: { userName: 'Raymond', userId: 2, take: 80 },
    3: { userName: 'Matt', userId: 3, take: -40 },
    4: { userName: 'David', userId: 4, take: 80 },
    5: { userName: 'Carson', userId: 5, take: -40 }
  }
};

export default class RecordsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    let weekOne = values(testData)[0];
    
    return(
      <div className="records-index">
        {values(weekOne).map(player => {
          return <RecordItem key={player.userId} player={player} />;
        })}
      </div>
    );
  }
};