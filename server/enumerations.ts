export enum OrganizationType{
    system = 1,
    guest = 2,
    supplier = 3
}

export enum OwnershipType{
    supplier=1,
    organization=2,
    user=3
}

export enum ImageType{
    icon = 1,
    thumbnail =2,
    small =3,
    medium = 4,
    large = 5,
    raw = 6
}

export enum SupplierType{
    Grower,
    Wholesaler
}

export class EnumHelper {
    public static getValuesFromEnum<E>(e: E): Array<Number> {
        let keys = Object.keys(e);
        let enumValues = new Array<Number>();
        keys.forEach(key => {
            enumValues.push(e[key]);
        });
        return enumValues;
    }
}

//Enum Parsing - Remember basically you really need to cast it as string for it to work. 
//var colorId = <string>myOtherObject.colorId; // Force string value here
//var color: Color = Color[colorId]; // Fixes lookup here.