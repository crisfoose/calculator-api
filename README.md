# calculator-api

### What is this repository? ###
Its an app to resolve basic matematics operations.

## Where is running?
While in development, you can use the local URL

`http://localhost:3000/api/calculator/`

<span>
*https:///api/calculator/*

</span>

## For using you can:

1- clone the repositorie
2- execute: `npm i` and before `npm start`

## Endpoints
- To get a result of composed operation you can consume:

### Method: 
`POST`

### URL: 
`{BASE_URL}/compoundOperation`

|     Parm          |  Tipe  |                          Value Expected                          |
|:-----------------:|:------:|:----------------------------------------------------------------:|
| BASE_URL          | String | URL of service (Development, Staging or production)              |
|                   |        |                                                                  |


### Where:

|    Data       |     Tipe     |           Value Expected           |
|:-------------:|:------------:|:----------------------------------:|
| operation     |    String    | 5+5-10/3 3*3/5+2 8*8-32+1          |
|               |              |                                    |

### Response Expected:
```
{
    "message": "Compound operation results",
    "data": [
        {
            "operation": "3x4+4-1",
            "result": 15
        },
        {
            "operation": "1+2+3+4",
            "result": 10
        },
        {
            "operation": "3/3+3-3",
            "result": 1
        }
    ]
}
```

### Method: 
`POST`

### URL: 
`{BASE_URL}/sum`

|     Parm          |  Tipe  |                          Value Expected                          |
|:-----------------:|:------:|:----------------------------------------------------------------:|
| BASE_URL          | String | URL of service (Development, Staging or production)              |
|                   |        |                                                                  |


### Where:

|    Data       |     Tipe     |           Value Expected           |
|:-------------:|:------------:|:----------------------------------:|
| value1        |    number    | 5                                  |
| operator      |    String    | +                                  |
| value2        |    number    | 5                                  |
|               |              |                                    |

### Response Expected:
```
{
    "message": "sum results",
    "data": {
        "operation": "5+5",
        "result": 10
    }
}
```

calculator-api
