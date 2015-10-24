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
