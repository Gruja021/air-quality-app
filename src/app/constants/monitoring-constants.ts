export const FETCH_CITY = 'FETCH_CITY';
export const FETCH_TIME = 'FETCH_DATA';
export const FETCH_COLOR_LEFT = 'FETCH_COLOR_LEFT';
export const FETCH_COLOR_RIGHT = 'FETCH_COLOR_RIGHT';
export const CAQI_11 = [
  {
    color: 'green',
    lightColor: 'lightGreen',
    value: 'Odlican',
  },
  {
    color: 'blue',
    lightColor: 'lightBlue',
    value: 'Dobar',
  },
  {
    color: 'orange',
    lightColor: 'lightOrange',
    value: 'Prihvatljiv',
  },
  {
    color: 'pink',
    lightColor: 'lightPink',
    value: 'Zagadjen',
  },
  {
    color: 'purple',
    lightColor: 'lightPurple',
    value: 'Jako zagadjen',
  },
  {
    color: 'grey',
    lightColor: 'lightGrey',
    value: 'Nepoznat',
  },
];
export const SO2 = {
  polutant: 'SO2',
  attributeName: 'so2',
  newCriteria: [
    {
      min: 0,
      max: 50,
    },
    {
      min: 50.01,
      max: 100,
    },
    {
      min: 100.01,
      max: 350,
    },
    {
      min: 350.01,
      max: 500,
    },
    {
      min: 500.01,
      max: 5000000,
    },
  ],
  oldCriteria: [
    {
      min: 0,
      max: 100,
    },
    {
      min: 100.01,
      max: 200,
    },
    {
      min: 200.01,
      max: 350,
    },
    {
      min: 350.01,
      max: 500,
    },
    {
      min: 500.01,
      max: 5000000,
    },
  ],
};
export const O3 = {
  polutant: 'O3',
  attributeName: 'o3',
  newCriteria: [
    {
      min: 0,
      max: 60,
    },
    {
      min: 60.01,
      max: 120,
    },
    {
      min: 120.01,
      max: 180,
    },
    {
      min: 180.01,
      max: 500,
    },
    {
      min: 500.01,
      max: 5000000,
    },
  ],
  oldCriteria: [
    {
      min: 0,
      max: 80,
    },
    {
      min: 80.01,
      max: 120,
    },
    {
      min: 120.01,
      max: 180,
    },
    {
      min: 180.01,
      max: 240,
    },
    {
      min: 240.01,
      max: 5000000,
    },
  ],
};
export const CO = {
  polutant: 'CO',
  attributeName: 'co',
  newCriteria: [
    {
      min: 0,
      max: 5,
    },
    {
      min: 5.00001,
      max: 10,
    },
    {
      min: 10.00001,
      max: 25,
    },
    {
      min: 25.00001,
      max: 50,
    },
    {
      min: 50.00001,
      max: 5000,
    },
  ],
  oldCriteria: [
    {
      min: 0,
      max: 5,
    },
    {
      min: 5.00001,
      max: 10,
    },
    {
      min: 10.00001,
      max: 25,
    },
    {
      min: 25.00001,
      max: 50,
    },
    {
      min: 50.00001,
      max: 5000,
    },
  ],
};
export const PM25 = {
  polutant: 'Pm2.5',
  attributeName: 'pm25',
  newCriteria: [
    {
      min: 0,
      max: 15,
    },
    {
      min: 15.01,
      max: 30,
    },
    {
      min: 30.01,
      max: 55,
    },
    {
      min: 55.01,
      max: 110,
    },
    {
      min: 110.01,
      max: 5000000,
    },
  ],
  oldCriteria: [
    {
      min: 0,
      max: 15,
    },
    {
      min: 15.01,
      max: 30,
    },
    {
      min: 30.01,
      max: 40,
    },
    {
      min: 40.01,
      max: 90,
    },
    {
      min: 90.01,
      max: 5000000,
    },
  ],
};
export const PM10 = {
  polutant: 'Pm10',
  attributeName: 'pm10',
  newCriteria: [
    {
      min: 0,
      max: 25,
    },
    {
      min: 35.01,
      max: 50,
    },
    {
      min: 50.01,
      max: 90,
    },
    {
      min: 90.01,
      max: 180,
    },
    {
      min: 180.01,
      max: 5000000,
    },
  ],
  oldCriteria: [
    {
      min: 0,
      max: 35,
    },
    {
      min: 35.01,
      max: 60,
    },
    {
      min: 60.01,
      max: 90,
    },
    {
      min: 90.01,
      max: 180,
    },
    {
      min: 180.01,
      max: 5000000,
    },
  ],
};
export const NO2 = {
  polutant: 'NO2',
  attributeName: 'no2',
  newCriteria: [
    {
      min: 0,
      max: 50,
    },
    {
      min: 50.01,
      max: 100,
    },
    {
      min: 100.01,
      max: 150,
    },
    {
      min: 150.01,
      max: 400,
    },
    {
      min: 400.01,
      max: 5000000,
    },
  ],
  oldCriteria: [
    {
      min: 0,
      max: 40,
    },
    {
      min: 40.01,
      max: 100,
    },
    {
      min: 100.01,
      max: 150,
    },
    {
      min: 150.01,
      max: 400,
    },
    {
      min: 400.01,
      max: 5000000,
    },
  ],
};
export const NONE = {
  polutant: 'NONE',
  attributeName: 'none',
  newCriteria: [
    {
      min: 0,
      max: 0,
    },
  ],
  oldCriteria: [
    {
      min: 0,
      max: 0,
    },
  ],
};

export const AQIPM25CONC = {
  valLow_1: 0,
  valHigh_1: 12,
  valLow_2: 12.1,
  valHigh_2: 35.4,
  valLow_3: 35.5,
  valHigh_3: 55.4,
  valLow_4: 55.5,
  valHigh_4: 150.4,
  valLow_5: 150.5,
  valHigh_5: 250.4,
  valLow_6: 250.5,
  valHigh_6: 350.4,
  valLow_7: 350.5,
  valHigh_7: 500.4,
};
export const AQIPM10CONC = {
  valLow_1: 0,
  valHigh_1: 54,
  valLow_2: 55,
  valHigh_2: 154,
  valLow_3: 155,
  valHigh_3: 254,
  valLow_4: 255,
  valHigh_4: 354,
  valLow_5: 355,
  valHigh_5: 424,
  valLow_6: 425,
  valHigh_6: 504,
  valLow_7: 505,
  valHigh_7: 604,
};
export const AQINO2CONC = {
  valLow_1: 0,
  valHigh_1: 53,
  valLow_2: 54,
  valHigh_2: 100,
  valLow_3: 101,
  valHigh_3: 360,
  valLow_4: 361,
  valHigh_4: 649,
  valLow_5: 650,
  valHigh_5: 1244,
  valLow_6: 1245,
  valHigh_6: 1644,
  valLow_7: 1645,
  valHigh_7: 2044,
};
export const AQICOCONC = {
  valLow_1: 0,
  valHigh_1: 4.4,
  valLow_2: 4.5,
  valHigh_2: 9.4,
  valLow_3: 9.5,
  valHigh_3: 12.4,
  valLow_4: 12.5,
  valHigh_4: 15.4,
  valLow_5: 15.5,
  valHigh_5: 30.4,
  valLow_6: 30.5,
  valHigh_6: 40.4,
  valLow_7: 40.5,
  valHigh_7: 50.4,
};
export const AQISO2CONC = {
  valLow_1: 0,
  valHigh_1: 35,
  valLow_2: 36,
  valHigh_2: 75,
  valLow_3: 76,
  valHigh_3: 185,
  valLow_4: 186,
  valHigh_4: 304,
};
export const AQIPMOZONECONC = {
  valLow_1: 125,
  valHigh_1: 164,
  valLow_2: 165,
  valHigh_2: 204,
  valLow_3: 205,
  valHigh_3: 404,
  valLow_4: 405,
  valHigh_4: 504,
  valLow_5: 505,
  valHigh_5: 604,
};
