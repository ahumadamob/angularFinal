export interface Country{
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    name: CountryName;
    coatOfArms: CountryCoatOfArms;
    flags: CountryFlags;
    maps: CountryMaps;
    population: number;
    area: number;
    independent: boolean;​​
    landlocked: boolean;
    languages:any;
    capital:string[];
    translations:{}
}

export interface CountryName{
    common: string,
    official: string
}

export interface CountryCoatOfArms{
    png: string,
    svg: string
}

export interface CountryFlags{
    png: string,
    svg: string,
    alt: string
}

export interface CountryMaps{
    googleMaps: string,
    openStreetMaps: string
}

export interface CountryLanguages{
    [k:string]:string
}