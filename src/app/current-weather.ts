export class CurrentWeather {
    constructor(public cityName: string,
                public temp: string,
                public icon: string,
                public typeMeteo: string,
                public tempMax: string,
                public tempMin: string) {}
}
