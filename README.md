# to-the-bottom

A quick command line utility for collapsing an object graph.
## Installation
```bash
npm install to-the-bottom -g
```
## Usage
### Running
```bash
toTheBottom -s <source file> -d <destination file> -c <children>
```
#### Options

##### Required

*-s, --sourceFile*  The source file of the object you are getting data .
Example: ./test/date/naics.js

*-c, --children*  The child property that will contain similar objects.
Example children

*-d, --destFile*  The destination json file that will be created. Example test.json

##### Optional

*-a,--includeAll'* Will include the parent items data.

## Example Data

```json
[
  {
    "label": "924 - Administration of Environmental Quality Programs",
    "value": "924",
    "children": [
      {
        "label": "9241 - Administration of Environmental Quality Programs",
        "value": "9241",
        "children": [
          {
            "label": "92411 - Administration of Air and Water Resource and Solid Waste Management Programs",
            "value": "92411",
            "children": [
              {
                "label": "924110 - Administration of Air and Water Resource and Solid Waste Management Programs",
                "value": "924110"
              }
            ]
          },
          {
            "label": "92412 - Administration of Conservation Programs",
            "value": "92412",
            "children": [
              {
                "label": "924120 - Administration of Conservation Programs",
                "value": "924120"
              }
            ]
          }
        ]
      }
    ]
  }
]
```

### Default Output
```bash
toTheBottom -s ../test/data/naicsExample.json  -c children -d data.json
```

```json
[
  {
    "label": "924110 - Administration of Air and Water Resource and Solid Waste Management Programs",
    "value": "924110"
  },
  {
    "label": "924120 - Administration of Conservation Programs",
    "value": "924120"
  }
]
```

### Include All Flag
```bash
toTheBottom -s ../test/data/naicsExample.json  -c children -d data.json -a
```

```json
[
  {
    "label": "924 - Administration of Environmental Quality Programs",
    "value": "924"
  },
  {
    "label": "9241 - Administration of Environmental Quality Programs",
    "value": "9241"
  },
  {
    "label": "92411 - Administration of Air and Water Resource and Solid Waste Management Programs",
    "value": "92411"
  },
  {
    "label": "924110 - Administration of Air and Water Resource and Solid Waste Management Programs",
    "value": "924110"
  },
  {
    "label": "92412 - Administration of Conservation Programs",
    "value": "92412"
  },
  {
    "label": "924120 - Administration of Conservation Programs",
    "value": "924120"
  }
]
```

## Release Notes
### 1.0.0
* [Semantic Versioning](http://semver.org/)
* [JavaScript Standard Style](https://github.com/feross/standard)
* Badges on README.md

### 0.0.4
* Fixed logic mistake where items were repeated in the list.
