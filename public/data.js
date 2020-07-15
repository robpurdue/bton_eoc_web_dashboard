const iconBase = 'https://su20-i516-final-eoc.web.app/images/icons/';

const icons = [{
    'icon' : 'fire',
    'url' : iconBase + 'fire.png'
  },{
    'icon' : 'injury',
    'url' : iconBase + 'injury.png'
  },{
    'icon' : 'outage',
    'url' : iconBase + 'outage.png'
  },{
    'icon' : 'blocked',
    'url' : iconBase + 'blocked.png'
  },{
    'icon' : 'line',
    'url' : iconBase + 'line.png'
  }];



const explosion = [
  {
    "longitude": -86.5244542,
    "latitude": 39.173287,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.5227376,
    "latitude": 39.1736613,
    "description": "Power Outage",
    "icon": "outage"
  },
  {
    "longitude": -86.5237461,
    "latitude": 39.1725267,
    "description": "Blocked Roadway",
    "icon": "blocked"
  },
  {
    "longitude": -86.5237139,
    "latitude": 39.1730673,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.5226625,
    "latitude": 39.172535,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5226517,
    "latitude": 39.1729342,
    "description": "Power Outage",
    "icon": "outage"
  },
  {
    "longitude": -86.5236817,
    "latitude": 39.172194,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.5231238,
    "latitude": 39.172352,
    "description": "Power Outage",
    "icon": "outage"
  },
  {
    "longitude": -86.522405,
    "latitude": 39.1729009,
    "description": "Power Line",
    "icon": "line"
  }
]

const storm = [
  {
    "longitude": -86.5016984,
    "latitude": 39.1653048,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5034579,
    "latitude": 39.166669,
    "description": "Blocked Roadway",
    "icon": "blocked"
  },
  {
    "longitude": -86.5050243,
    "latitude": 39.1682162,
    "description": "Blocked Roadway",
    "icon": "blocked"
  },
  {
    "longitude": -86.5035223,
    "latitude": 39.1688483,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5071272,
    "latitude": 39.168316,
    "description": "Blocked Roadway",
    "icon": "blocked"
  },
  {
    "longitude": -86.5082859,
    "latitude": 39.1656708,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5073525,
    "latitude": 39.1666898,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.5050994,
    "latitude": 39.166565,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.507213,
    "latitude": 39.1712272,
    "description": "Power Line",
    "icon": "line"
  }
];

const crash = [
  {
    "longitude": -86.5875517,
    "latitude": 39.1610057,
    "description": "Fire",
    "icon": "fire"
  },
  {
    "longitude": -86.5876011,
    "latitude": 39.1608292,
    "description": "Fire",
    "icon": "fire"
  },
  {
    "longitude": -86.5871665,
    "latitude": 39.1610622,
    "description": "Fire",
    "icon": "fire"
  },
  {
    "longitude": -86.5871075,
    "latitude": 39.16085,
    "description": "Fire",
    "icon": "fire"
  },
  {
    "longitude": -86.5871344,
    "latitude": 39.1612743,
    "description": "Fire",
    "icon": "fire"
  },
  {
    "longitude": -86.5866569,
    "latitude": 39.1614823,
    "description": "Fire",
    "icon": "fire"
  },
  {
    "longitude": -86.5866462,
    "latitude": 39.1612701,
    "description": "Fire",
    "icon": "fire"
  },
  {
    "longitude": -86.5879122,
    "latitude": 39.1608001,
    "description": "Blocked Roadway",
    "icon": "blocked"
  },
  {
    "longitude": -86.5878907,
    "latitude": 39.1597602,
    "description": "Blocked Roadway",
    "icon": "blocked"
  },
  {
    "longitude": -86.5868554,
    "latitude": 39.1605838,
    "description": "Blocked Roadway",
    "icon": "blocked"
  },
  {
    "longitude": -86.5868876,
    "latitude": 39.1619481,
    "description": "Blocked Roadway",
    "icon": "blocked"
  },
  {
    "longitude": -86.5858576,
    "latitude": 39.1619356,
    "description": "Blocked Roadway",
    "icon": "blocked"
  },
  {
    "longitude": -86.5889261,
    "latitude": 39.1603675,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5879068,
    "latitude": 39.160459,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5882716,
    "latitude": 39.1612119,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5879068,
    "latitude": 39.1619647,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5868715,
    "latitude": 39.161632,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5858523,
    "latitude": 39.1613741,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.5858308,
    "latitude": 39.1605173,
    "description": "Power Line",
    "icon": "line"
  },
  {
    "longitude": -86.587644,
    "latitude": 39.1614656,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.5875474,
    "latitude": 39.1612036,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.5871558,
    "latitude": 39.161632,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.5871397,
    "latitude": 39.1606171,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.5875742,
    "latitude": 39.1604424,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.586614,
    "latitude": 39.1610788,
    "description": "Personal Injury",
    "icon": "injury"
  },
  {
    "longitude": -86.5866462,
    "latitude": 39.1618524,
    "description": "Personal Injury",
    "icon": "injury"
  }
]