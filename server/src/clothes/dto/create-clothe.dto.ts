import { IsNumber, IsString } from "class-validator";

export class CreateClotheDto {
    @IsString(
        { message: "Не корректное значение" },
    )
    name: string;
    
    @IsString(
        { message: "Не корректное значение" },
    )
    description: string;
    
    @IsString(
        { message: "Не корректное значение" },
    )
    size: string
    
    @IsString(
        { message: "Не корректное значение" },
    )
    color: string
    
    @IsString(
        { message: "Не корректное значение" },
    )
    
    @IsNumber()
    price: number;
    
    brandId: number

    categoryId: number;
    
    @IsString(
        { message: "Не корректное значение" },
    )
    imageUrl: string;
}
