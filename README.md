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

*-s, --sourceFile*  The source file of the object you are getting data .
Example: ./test/date/naics.js

*-c, --children*  The child property that will contain similar objects.
Example children

*-d, --destFile*  The destination json file that will be created. Example test.json

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
