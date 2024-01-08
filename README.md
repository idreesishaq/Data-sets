# Data-sets
A collection of JavaScript data sets created in the form of objects, arrays, objects of objects, array of objects and possible complex structures.

Here is a glimpse of data sets which each folder contains particularly.
May this brief description would help you to find a suitable data set to work on.

## objects_of_objects
This data set is structered as objects of objects of objects. As we see here the main object `cars` has multiple objects with having properties like 'honda', 'toyota', 'suzuki' etc. Each of which further has objects with unique name (property) describing a car with 12 properties associated with each car.


**Example**
```
var cars = {
    honda: {
        vezel2019: {
            brand: "Honda",
            model: "Vezel",
            year: "2019",
            distanceTravelled: "13,713 km",
            fuelType: "hybrid",
            transmission: "automatic",
            color: "white",
            enginCapacity: "1500cc",
            bodyType: "crossover",
            pricePKR: "85 lacs",
            imageSrc: "images/honda-vezel-hybrid-z-2019.webp",
            nameDescription: "Honda Vezel Hybrid Z 2019"
         }
    }
}
```
<hr />

## Array of objects
This data set is structured as array. Each element of the array is an object itself with the same twelve (12) property value pairs which the **objects_of_objects** dataset has.

**Example**
```
var cars = [
    {
        brand: "Honda",
        model: "Vezel",
        year: "2019",
        distanceTravelled: "13,713 km",
        fuelType: "hybrid",
        transmission: "automatic",
        color: "white",
        enginCapacity: "1500cc",
        bodyType: "crossover",
        pricePKR: "85 lacs",
        imageSrc: "images/honda-vezel-hybrid-z-2019.webp",
        nameDescription: "Honda Vezel Hybrid Z 2019"
    }
]
```
