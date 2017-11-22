import React from 'react';
import RecordItem from './RecordItem';
import { keys } from 'lodash';

const testData = {
  110417: {
    loc: 'Kellys place',
    players: {
      1: { userName: 'Alex', userId: 1, take: -40 },
      2: { userName: 'Raymond', userId: 2, take: 80 },
      3: { userName: 'Matt', userId: 3, take: -40 },
      4: { userName: 'David', userId: 4, take: 800 },
      5: { userName: 'Carson', userId: 5, take: -40 },
      6: { userName: 'Kelly', userId: 6, take: 60 }
    }
  },
  111117: {
    loc: 'Kellys place',
    players: {
      1: { userName: 'Alex', userId: 1, take: -40 },
      2: { userName: 'Raymond', userId: 2, take: 80 },
      3: { userName: 'Matt', userId: 3, take: -40 },
      4: { userName: 'David', userId: 4, take: 800 },
      5: { userName: 'Carson', userId: 5, take: -40 },
      6: { userName: 'Kelly', userId: 6, take: 60 }
    }
  },
  111817: {
    loc: 'Kellys place',
    players: {
      1: { userName: 'Alex', userId: 1, take: -40 },
      2: { userName: 'Raymond', userId: 2, take: 80 },
      3: { userName: 'Matt', userId: 3, take: -40 },
      4: { userName: 'David', userId: 4, take: 800 },
      5: { userName: 'Carson', userId: 5, take: -40 },
      6: { userName: 'Kelly', userId: 6, take: 60 }
    }
  },
  112517: {
    loc: 'Kellys place',
    players: {
      1: { userName: 'Alex', userId: 1, take: -40 },
      2: { userName: 'Raymond', userId: 2, take: 80 },
      3: { userName: 'Matt', userId: 3, take: -40 },
      4: { userName: 'David', userId: 4, take: 800 },
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
          return <RecordItem key={i} date={key} loc={testData[key].loc} data={testData[key].players} />;
        })}
      </div>
    );
  }
};