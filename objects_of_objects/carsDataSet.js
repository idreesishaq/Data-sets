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

        },
        civic2013: {
            brand: "Honda",
            model: "Civic",
            year: "2013",
            distanceTravelled: "83,180 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "urban titanium",
            enginCapacity: "1800cc",
            bodyType: "sedan",
            pricePKR: "28 lacs",
            imageSrc: "images/honda-civic-vti-1-8-i-vtec-oriel-prosmatec-2013-93337152.webp",
            nameDescription: "Honda Civic VTi Oriel Prosmatec 1.8 i-VTEC 2013"
        },
        fitAria2006: {
            brand: "Honda",
            model: "Fit Aria",
            year: "2006",
            distanceTravelled: "247,604 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "black",
            enginCapacity: "1500cc",
            bodyType: "sedan",
            pricePKR: "15.8 lacs",
            imageSrc: "images/honda-city-i-dsi-vario-2006-94498970.webp",
            nameDescription: "Honda Fit Aria 1.5C 2006"
        },
        city2016: {
            brand: "Honda",
            model: "City",
            year: "2016",
            distanceTravelled: "108,567 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "taffeta white",
            enginCapacity: "1500cc",
            bodyType: "sedan",
            pricePKR: "36 lacs",
            imageSrc: "images/honda-city-aspire-prosmatec-2016-93996363.webp",
            nameDescription: "Honda City Aspire Prosmatec 1.5 i-VTEC 2016"
        },
        civic2008: {
            brand: "Honda",
            model: "Civic",
            year: "2008",
            distanceTravelled: "142,216 km",
            fuelType: "petrol",
            transmission: "manual",
            color: "crystal black",
            enginCapacity: "1800cc",
            bodyType: "sedan",
            pricePKR: "29 lacs",
            imageSrc: "images/honda-civic-vti-1-8-i-vtec-oriel-2008-92373724.webp",
            nameDescription: "Honda Civic VTi Oriel 1.8 i-VTEC 2008"
        },
        vezel2018 : {
            brand: "Honda",
            model: "Vezel",
            year: "2018",
            distanceTravelled: "62,404 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "silver",
            enginCapacity: "1500cc",
            bodyType: "crossover",
            pricePKR: "75 lacs",
            imageSrc: "images/honda-vezel-hybird-xl-2018-94261403.webp",
            nameDescription: "Honda Vezel Hybrid X L Package 2018"
        },
        accord2005 : {
            brand: "Honda",
            model: "Accord",
            year: "2005",
            distanceTravelled: "200,000 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "alabaster silver",
            enginCapacity: "2400cc",
            bodyType: "sedan",
            pricePKR: "24.5 lacs",
            imageSrc: "images/honda-accord-2-4-i-vtec-prosmatec-2005-94837097.webp",
            nameDescription: "Honda Accord VTi 2.4 2005"
        },
        city2014 : {
            brand: "Honda",
            model: "City",
            year: "2014",
            distanceTravelled: "104,000 km",
            fuelType: "petrol",
            transmission: "manual",
            color: "crystal black pearl",
            enginCapacity: "1300cc",
            bodyType: "sedan",
            pricePKR: "24.7 lacs",
            imageSrc: "images/honda-city-i-vtec-2-2014-94836903.webp",
            nameDescription: "Honda City 1.3 i-VTEC 2014"
        },
        accrod2024 : {
            brand: "Honda",
            model: "Accord",
            year: "2024",
            distanceTravelled: "1",
            fuelType: "petrol",
            transmission: "automatic",
            color: "crystal black pearl",
            enginCapacity: "1500cc",
            bodyType: "sedan",
            pricePKR: "2.31 crore",
            imageSrc: "images/honda-accord-1-5l-vtec-turbo-2024-94837009.webp",
            nameDescription: "Honda Accord 1.5L VTEC Turbo 2024"
        },
        nWgn : {
            brand: "Honda",
            model: "N Wgn",
            year: "2022",
            distanceTravelled: "5,000 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "beige",
            enginCapacity: "660cc",
            bodyType: "hatchback",
            pricePKR: "37 lacs",
            imageSrc: "images/honda-n-wgn-g-a-package-2022-93252296.webp",
            nameDescription: "Honda N Wgn G A Package 2022"
        }
    },
    toyota: {
        prius: {
            brand: "Toyota",
            model: "Prius",
            year: "2014",
            distanceTravelled: "162,000 km",
            fuelType: "hybrid",
            transmission: "automatic",
            color: "silver",
            enginCapacity: "1800cc",
            bodyType: "hatchback",
            pricePKR: "45.75 lacs",
            imageSrc: "images/toyota-prius-2014-91401723.webp",
            nameDescription: "Toyota Prius 2014"
        },
        landCruiser: {
            brand: "Toyota",
            model: "Land Cruiser",
            year: "2013",
            distanceTravelled: "93,000 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "black",
            enginCapacity: "4600 cc",
            bodyType: "SUV",
            pricePKR: "2.5 crore",
            imageSrc: "images/toyota-land-cruiser-ax-2-2013-92726831.webp",
            nameDescription: "Toyota Land Cruiser AX 2013"
        },
        hilux: {
            brand: "Toyota",
            model: "Hilux",
            year: "2021",
            distanceTravelled: "46,700 km",
            fuelType: "diesel",
            transmission: "automatic",
            color: "white",
            enginCapacity: "2800cc",
            bodyType: "double cabin",
            pricePKR: "1.15 crore",
            imageSrc: "images/toyota-hilux-revo-v-automatic-2-8-2021-94717381.webp",
            nameDescription: "Toyota Hilux Revo V Automatic 2.8 2021"
        },
        prado2004: {
            brand: "Toyota",
            model: "Prado",
            year: "2004",
            distanceTravelled: "146,000 km",
            fuelType: "diesel",
            transmission: "automatic",
            color: "maroon",
            enginCapacity: "3000cc",
            bodyType: "SUV",
            pricePKR: "82 lacs",
            imageSrc: "images/toyota-prado-tz-3-0d-2004-94849118.webp",
            nameDescription: "Toyota Prado TZ 3.0D 2004"
        },
        corolla: {
            brand: "Toyota",
            model: "Corolla",
            year: "2004",
            distanceTravelled: "130,000 km",
            fuelType: "petrol",
            transmission: "manual",
            color: "rose metallic",
            enginCapacity: "1600cc",
            bodyType: "sedan",
            pricePKR: "15.5 lacs",
            imageSrc: "images/toyota-corolla-se-saloon-2-2004-94850367.webp",
            nameDescription: "Toyota Corolla SE Saloon 2004"
        },
        voxy: {
            brand: "Toyota",
            model: "Voxy",
            year: "2016",
            distanceTravelled: "65,000 km",
            fuelType: "hybrid",
            transmission: "automatic",
            color: "white pearl",
            enginCapacity: "2000cc",
            bodyType: "mini van",
            pricePKR: "70 lacs",
            imageSrc: "images/toyota-voxy-x-28-2016-94850797.webp",
            nameDescription: "Toyota Voxy X 2016"
        },
        yaris: {
            brand: "Toyota",
            model: "Yaris",
            year: "2021",
            distanceTravelled: "86,000 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "black",
            enginCapacity: "1000cc",
            bodyType: "hatchback",
            pricePKR: "46.5 lacs",
            imageSrc: "images/toyota-yaris-hatchback-2021-92992898.webp",
            nameDescription: "Toyota Yaris Hatchback 2021"
        },
        fortuner: {
            brand: "Toyota",
            model: "Fortuner",
            year: "2021",
            distanceTravelled: "14,000 km",
            fuelType: "diesel",
            transmission: "automatic",
            color: "super white",
            enginCapacity: "2800cc",
            bodyType: "SUV",
            pricePKR: "1.65 crore",
            imageSrc: "images/toyota-fortuner-2-8-sigma-2021-94851068.webp",
            nameDescription: "Toyota Fortuner 2.8 Sigma 4 2021"
        },
        prado2009: {
            brand: "Toyota",
            model: "Prado",
            year: "2009",
            distanceTravelled: "120,000 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "black",
            enginCapacity: "2700cc",
            bodyType: "SUV",
            pricePKR: "94.5 lacs",
            imageSrc: "images/toyota-prado-tx-limited-3-2009-94850677.webp",
            nameDescription: "Toyota Prado TX Limited 2.7 2009"
        },
        prado1998: {
            brand: "Toyota",
            model: "Prado",
            year: "1998",
            distanceTravelled: "112,000 km",
            fuelType: "diesel",
            transmission: "automatic",
            color: "white",
            enginCapacity: "3000cc",
            bodyType: "SUV",
            pricePKR: "48 lacs",
            imageSrc: "images/toyota-prado-tx-3-0d-1998-94850515.webp",
            nameDescription: "Toyota Prado TX 3.0D 1998"
        },
        aqua: {
            brand: "Toyota",
            model: "Aqua",
            year: "2016",
            distanceTravelled: "100,000 km",
            fuelType: "hybrid",
            transmission: "automatic",
            color: "silver",
            enginCapacity: "1500cc",
            bodyType: "hatchback",
            pricePKR: "41.1 lacs",
            imageSrc: "images/toyota-aqua-s-15-2016-92296445.webp",
            nameDescription: "Toyota Aqua S 2016"
        },
        camry: {
            brand: "Toyota",
            model: "Camry",
            year: "2007",
            distanceTravelled: "145,000 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "beige",
            enginCapacity: "2400cc",
            bodyType: "sedan",
            pricePKR: "32 lacs",
            imageSrc: "images/toyota-camry-g-30-2007-91017278.webp",
            nameDescription: "Toyota Camry G 2007"
        },
        alphard: {
            brand: "Toyota",
            model: "Alphard",
            year: "2018",
            distanceTravelled: "12,000 km",
            fuelType: "hybrid",
            transmission: "automatic",
            color: "white",
            enginCapacity: "2500cc",
            bodyType: "MUV",
            pricePKR: "2.54 crore",
            imageSrc: "images/toyota-alphard-2018-92801099.webp",
            nameDescription: "Toyota Alphard 2018"
        },
        allion: {
            brand: "Toyota",
            model: "Allion",
            year: "2011",
            distanceTravelled: "115,000 km",
            fuelType: "petrol",
            transmission: "automatic",
            color: "black",
            enginCapacity: "1500 cc",
            bodyType: "sedan",
            pricePKR: "45 lacs",
            imageSrc: "images/toyota-allion-a15-2011-93202772.webp",
            nameDescription: "Toyota Allion A15 2011"
        },
        aqua2014: {
            brand: "Toyota",
            model: "Aqua",
            year: "2014",
            distanceTravelled: "103,000 km",
            fuelType: "hybrid",
            transmission: "automatic",
            color: "yellow",
            enginCapacity: "1500 cc",
            bodyType: "hatchback",
            pricePKR: "32.5 lacs",
            imageSrc: "images/toyota-aqua-s-15-2014-91069783.webp",
            nameDescription: "Toyota Aqua S 2014"
        },
        camry2012: {
            brand: "Toyota",
            model: "Camry",
            year: "2012",
            distanceTravelled: "123,456 km",
            fuelType: "hybrid",
            transmission: "automatic",
            color: "black",
            enginCapacity: "2500cc",
            bodyType: "sedan",
            pricePKR: "70 lacs",
            imageSrc: "images/toyota-camry-hybrid-2-2012-94554848.webp",
            nameDescription: "Toyota Camry Hybrid 2012"
        },
        fortuner2023: {
            brand: "Toyota",
            model: "Fortuner Legender",
            year: "2023",
            distanceTravelled: "2,000 km",
            fuelType: "diesel",
            transmission: "automatic",
            color: "attitude black",
            enginCapacity: "2800cc",
            bodyType: "SUV",
            pricePKR: "2.06 crore",
            imageSrc: "images/toyota-fortuner-legender-2023-93956547.webp",
            nameDescription: "Toyota Fortuner Legender 2023"
        }
    }
}
