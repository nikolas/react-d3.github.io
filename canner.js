
var charts = [{
  "name": "Line",
  "link": "line",
},{
  "name": "Line Multiple",
  "link": "line_multi"
},{
  "name": "Area",
  "link": "area"
},{
  "name": "Area Stack",
  "link": "area_stack"
},{
  "name": "Bar",
  "link": "bar"
},{
  "name": "Bar Group",
  "link": "bar_group"
},{
  "name": "Bar Stack",
  "link": "bar_stack"
},{
  "name": "Scatter",
  "link": "scatter"
},{
  "name": "Pie",
  "link": "pie"
},{
  "name": "Donut",
  "link": "donut"
}];

var basic_data = charts.map(function(c) {
  return {
    "name": c.name,
    "chart": "<div id='data_" + c.link + "'></div><script src='/react-d3-basic/example/dist/min/" + c.link + ".min.js'></script>",
    "md": "./basic/md/" + c.link + ".md"
  }
})

basic_data.unshift({
  "name": "introduction",
  "md": "./react-d3-basic/README.md"
})

module.exports = [
  {
    "layout": "./index.hbs",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js"],
    "data": {
        "item": "react-d3",
        "logo": "https://avatars0.githubusercontent.com/u/14354544?v=3&s=200",
        "slogan": "Painless building d3 charts",
        "description": "A whole new solution for building reusable components for d3 charts",
        "banner-img": "/img/basic/cover.png",
        "product": {
          "title": "react-d3",
          "data": [{
            "name": "Introduction",
            "md": "./intro/intro.md"
          }, {
            "name": "react-d3-core",
            "md": "./react-d3-core/README.md"
          }, {
            "name": "react-d3-basic",
            "md": "./intro/intro_basic.md"
          }, {
            "name": "react-d3-tooltip",
            "md": "./react-d3-tooltip/README.md"
          }, {
            "name": "react-d3-zoom",
            "md": "./react-d3-zoom/README.md"
          }, {
            "name": "react-d3-brush",
            "md": "./react-d3-brush/README.md"
          }]
        }
    }
  }, {
    "layout": "./gallery.hbs",
    "filename": "./basic/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js"],
    "data": {
        "item": "react-d3-basic",
        "logo": "https://avatars0.githubusercontent.com/u/14354544?v=3&s=200",
        "slogan": "react-d3 basic charts",
        "description": "Building Line, bar, Scatter, Area Charts ... with ease.",
        "banner-img": "/img/basic/cover.png",
        "product": {
          "title": "react-d3",
          "data": basic_data
        }
    }
  }]