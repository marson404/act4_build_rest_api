export interface Product {
    name: string,
    description: string,
    price: number
}

export interface UnitProduct extends Product {
    id: string
}

export interface Products {
    [key: string]: UnitProduct
}
