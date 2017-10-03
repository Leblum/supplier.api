import { mongoose } from '../config/database/database';
import { Schema, Model, Document, model } from 'mongoose';
import { IBaseModel, IBaseModelDoc } from "./index";
import * as enums from "../enumerations";
import { IOwnership } from "./ownership.interface";
import { IImage } from './image.interface';


export interface ISupplier extends IBaseModel {
    ownerships?: {
        ownerId: string,
        ownershipType: enums.OwnershipType
    }[],
    name:string,
    isApproved: boolean,
}

export interface ISupplierDoc extends ISupplier, IBaseModelDoc {

}

const SupplierSchema = new Schema({
    ownerships: [{
        _id: { auto: false },
        ownerId: { type: String },
        ownershipType: { type: Number, enum: [enums.EnumHelper.getValuesFromEnum(enums.OwnershipType)] },
    }],
    name: { type: String },
    isTemplate: { type: Boolean, required: true, default: false },
}, { timestamps: true });

//If you do any pre save methods, and you use fat arrow syntax 'this' doesn't refer to the document.
SupplierSchema.pre('save', function (next) {
    //If there's any validators, this field requires validation.
    next();
});

// This will compile the schema for the object, and place it in this Instance.
export const Supplier = mongoose.model<ISupplierDoc>('supplier', SupplierSchema);