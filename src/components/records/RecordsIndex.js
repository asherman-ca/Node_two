import React from 'react';
import RecordItem from './RecordItem';
import { keys } from 'lodash';

// Pokergame
  // location: string
  // date: number
  // players: List <Gamesession>
  // totalPot: number

// Gamesession 
  // username: string
  // userid: number
  // take: number
  // location: string
  // date: number

// User
  // username: string
  // total: number
  // sessionIds: array

// Location
  // name: string
  // totalPot: number
  // gameIds: array


const testData = {
  110417: {
    loc: 'Kellys place',
    total: 200,
    players: {
      1: { userName: 'Alex', userId: 1, take: -40 },
      2: { userName: 'Raymond', userId: 2, take: 80 },
      3: { userName: 'Matt', userId: 3, take: -40 },
      4: { userName: 'David', userId: 4, take: 120 },
      5: { userName: 'Carson', userId: 5, take: -40 },
      6: { userName: 'Kelly', userId: 6, take: 60 }
    }
  },
  111117: {
    loc: 'Kellys place',
    total: 160,
    players: {
      1: { userName: 'Alex', userId: 1, take: -40 },
      2: { userName: 'Raymond', userId: 2, take: 80 },
      3: { userName: 'Matt', userId: 3, take: -40 },
      4: { userName: 'David', userId: 4, take: 40 },
      5: { userName: 'Carson', userId: 5, take: -40 },
      6: { userName: 'Kelly', userId: 6, take: 60 }
    }
  },
  111817: {
    loc: 'Kellys place',
    total: 120,
    players: {
      1: { userName: 'Alex', userId: 1, take: -40 },
      2: { userName: 'Raymond', userId: 2, take: 80 },
      3: { userName: 'Matt', userId: 3, take: -40 },
      4: { userName: 'David', userId: 4, take: 80 },
      5: { userName: 'Carson', userId: 5, take: -40 },
      6: { userName: 'Kelly', userId: 6, take: 60 }
    }
  },
  112517: {
    loc: 'Kellys place',
    total: 140,
    players: {
      1: { userName: 'Alex', userId: 1, take: -40 },
      2: { userName: 'Raymond', userId: 2, take: 80 },
      3: { userName: 'Matt', userId: 3, take: -40 },
      4: { userName: 'David', userId: 4, take: 20 },
      5: { userName: 'Carson', userId: 5, take: -40 },
      6: { userName: 'Kelly', userId: 6, take: 60 }
    }
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
    return(
      <div className="records-index">
        {keys(testData).map((key, i) => {
          return <RecordItem key={i} total={testData[key].total} date={key} loc={testData[key].loc} data={testData[key].players} />;
        })}
      </div>
    );
  }
};