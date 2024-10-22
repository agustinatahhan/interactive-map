# About this project
This project is an interactive map of Ukraine that displays population data for each oblast (region). Users can explore the map by zooming in and out, view boundaries of the oblasts, and toggle layers for main roads and administrative boundaries. Clicking on a specific oblast opens a popup displaying the population of that region. The data is sourced from reliable geographic and population datasets, providing a dynamic and insightful view of Ukraine’s population distribution.
The app is built using React and React-Leaflet for map rendering, with GeoJSON data formats to handle geographic boundaries and roadmaps. It is designed to provide a clean and user-friendly interface for navigating through population data.


### Install dependencies:
Make sure you have Node.js installed and run the following command:
#### npm install
### Run the application:
To start the development server, run:
#### npm run dev
### Features
#### Zoom: 
##### You can zoom in and out of the map using the mouse wheel or the control buttons on the left.

#### Layer selection: In the top right corner, you will find a layer icon where you can:

- Toggle the main roads layer on or off.
- Toggle the oblast boundaries layer on or off.
#### Population per Oblast: 
##### Clicking on any oblast will display a popup showing the population of that region. If data is not available, a message will indicate that population data is missing.

### Technical Details
- The project uses React and React-Leaflet to render the interactive map.
- The geospatial data is in GeoJSON format and is dynamically loaded from the public/data folder.
- Road maps and oblast boundaries layers are used to provide additional visual detail.
### Data Sources
The population and geographic data were sourced from the following documentation:

- [List of Ukrainian oblasts and territories by population (Wikipedia)](https://en.wikipedia.org/wiki/List_of_Ukrainian_oblasts_and_territories_by_population)
- [Stanford Libraries - Ukraine population data](https://purl.stanford.edu/gg870xt4706)
- [GeoBoundaries - Ukraine Administrative Boundaries](https://data.humdata.org/dataset/geoboundaries-admin-boundaries-for-ukraine)
- [Mapcruzin - Free Ukraine Shapefiles](https://mapcruzin.com/free-ukraine-arcgis-maps-shapefiles.htm)

