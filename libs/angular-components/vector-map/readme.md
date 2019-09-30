# Description of Vector Map

The vector map is for display Data in a map generate with Plotly Library and Angular.

## Plotly Documentation

[Chart Attribute Reference](https://plot.ly/javascript/reference/)

[Event Handler in Plotly](https://plot.ly/javascript/plotlyjs-events/)

[Choropleth Map Plotly](https://plot.ly/javascript/choropleth-maps/)

## Format Data

```
 demoData: any[] = [
    {
      country: 'France', // country is a string
      value: 10, //value is a number
      currency: 'EUR',
      text: 'hello world'
    },
    {
        country: 'USA',
        value: 25
    }
  ]
```

> **country** and **value** is important for display data in the map
> **country** is available in [ISO-3 format](https://www.iban.com/country-codes 'link to the iso 3 codes countries') and **country names format**

## Input / Output

**Input**

| Input name         | Type                | Description                                                                |
| ------------------ | :------------------ | :------------------------------------------------------------------------- |
| controlBar         | boolean(button)     | Display control bar or not                                                 |
| width              | number              | Width of Map                                                               |
| height             | number              | Height of Map                                                              |
| showcountriesCheck | boolean(checkbox)   | Display Countries Boundaries or not                                        |
| showlandCheck      | boolean(checkbox)   | Display Country with color or not                                          |
| showborderMap      | boolean(checkbox)   | Display border of Map or not                                               |
| showcoastLines     | boolean(checkbox)   | Display coast lines or not                                                 |
| landColor          | A palette or string | Color of country with no values                                            |
| countryColor       | A palette or string | Color of boundaries countries                                              |
| clickmodeStatus    | string              | Active or not the event on the click                                       |
| legends            | Array               | Configuration for the legends                                              |
| data               | Array               | Data display in the map                                                    |
| colorbarTitle      | string              | Title of the colorbar                                                      |
| colorbarColorMin   | A palette or string | Color for minimum values                                                   |
| colorbarColorMax   | A palette or string | Color for maximum values                                                   |
| displayField       | Array[string]       | Filter Data as according to the table values                               |
| centerPos          | Array [number]      | Longitude and latitude determined according to continent for center of map |
| titleMap           | string              | Title of Map                                                               |
| countryNameType    | string              | Type of Country Name ( ISO or country names)                               |

**Output**

| Output Names | Description                                              |
| ------------ | :------------------------------------------------------- |
| (onClick)    | Emit data (country, value) when you click on the country |
