Donut Chart Component:

```js

import {
  PieChart as PieChart
} from 'react-d3-basic';

// Your Setting props!

const radius = Math.min(width, height - 120) / 2;
const outerRadius= {radius - 10};
const innerRadius= {40};

const chartSeries = [
      {
        "field": "<5",
        "name": "less than 5"
      },
      {
        "field": "5-13",
        "name": "5 to 13"
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24"
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      }
    ]

// Your other setting props

<PieChart {pass all your props and chartSeries here!} />

// And you have a beautiful chart in react!
```

<a href="/basic/donut">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT DONUT CHART!!</button>
</a>