<p align="center">
  <a href="https://nodejs.org/es/" target="blank"><img src="https://nodejs.org/static/images/logos/nodejs-new-black.svg" width="320" alt="Node Logo" /></a>
</p>

 <p align="center">Challenge Backend para Personal Pay, realizado con <a href="http://nodejs.org" target="blank">Node.js</a>. Este consta de una API, mediante la cual por diversos endpoint es posible obtener datos de localización y clima.</p>

<a href="https://expressjs.com/es/"><img src="https://camo.githubusercontent.com/7f73136d92799b19be179d1ed87b461120c35ed917c7d5ab59a7606209da7bd3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d7768697465" alt="ExpressJs" /></a>
<a href="https://www.chaijs.com/"><img src="https://camo.githubusercontent.com/3c6e596d244ccb5b491bad3c050bb238eace57fc78243db4e48a3b7e21dc7aa7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636861692d4133303730313f7374796c653d666f722d7468652d6261646765266c6f676f3d63686169266c6f676f436f6c6f723d7768697465" alt="Chai" /></a>
<a href="https://mochajs.org/"><img src="https://camo.githubusercontent.com/6fe498dfa70e4536cc46563b07b45425937dffc1cd5433771cdd0a4770928cac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6368612d3844363734383f7374796c653d666f722d7468652d6261646765266c6f676f3d4d6f636861266c6f676f436f6c6f723d7768697465" alt="Mocha" /></a>

</p>

## Requirements

```bash
node -v
v14.17.3
```

## Installation

- `npm`

## Running the app

- `npm install`

- `dev: npm run dev`

- `prod: npm start`

## Running test

```bash
# e2e tests
- `test: npm run test`
```

## Http response

- `/location`

El mencionado endpoint, utilzando la Ip publica, consulta datos de localización mediante la Api de ip-api.

On successful example

```json
{
  "location": {
    "status": "success",
    "country": "Example",
    "countryCode": "EX",
    "region": "C",
    "regionName": "Example F.D.",
    "city": "example city",
    "zip": "1871",
    "lat": -34.6022,
    "lon": -58.3845,
    "timezone": "America/example/example",
    "isp": "Provedor Example S.A.",
    "org": "Provedor Example S.A",
    "as": " Provedor Example S.A.",
    "query": "195.144.7.5x"
  }
}
```

- `/current/:city?/:countryCode?`

- Casos de Uso:

```bash
  1) /current/London/GB (otorga datos de Londres)
  2) /current (otorga datos segun localización por Ip)
```

El mencionado endpoint, utilzando la Ip publica, consulta datos de localización mediante la Api de ip-api o se utilización los datos aportados mediante req.params.query (de forma opcional), a fin de obtener por medio de la API de openweatherapi datos del clima actual.

On successful example

```json
{
  "city": "datos de localización",
  "weather": "datos de clima complementarios",
  "temp": "temperatura actual"
}
```

- `/forecast/:city?/:countryCode?`

- Casos de Uso:

```bash
  1) /forecast/London/GB (otorga datos de Londres)
  2) /forecast (otorga datos segun localización por Ip)
```

El mencionado endpoint, utilzando la Ip publica, consulta datos de localización mediante la Api de ip-api o se utilización los datos aportados mediante req.params.query (de forma opcional), a fin de obtener por medio de la API de openweatherapi datos del clima actual y los siguientes cinco dias.

On successful example

```json
{
  "city": "datos de localización",
  "weather": "Array de objetos, el cual contiene los datos del clima del momento y los subsiguientes cinco dias"
}
```

## Github

- `https://github.com/MatiasPreiti/ChallengePersonalPay`

## Authors

- **Matias Oscar Preiti <preitimatias@gmail.com>**
