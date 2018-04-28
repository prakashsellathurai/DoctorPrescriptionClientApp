export class MyPrescription {
    $key: string;
    dateplaced: Date;
    items: Array<Products>;
    patient_details: patienDetails;
}

export interface Products {
    product: Product;
    quantity: number;
    totalPrice: number;
}
export interface Product {
description: string;
price: number;
title: string;
}
// tslint:disable-next-line:class-name
export interface patienDetails {
dob: Date;
gender: string;
name: string;
}
